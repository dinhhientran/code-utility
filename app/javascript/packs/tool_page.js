import $ from "jquery";
import BasePage from "./base_page";
import Toastr from "toastr/build/toastr.min.js"
import Cookies from "js-cookie"
import ClipboardJS from 'clipboard/dist/clipboard.min.js'
import moment from 'moment/dist/moment.js'
import {DOWNLOAD_FILE_NAME_MODAL} from "./modals/download_file_name";

export default class ToolPage extends BasePage {

    constructor(props) {
        super(props);

        this.sendShareRequest = this.sendShareRequest.bind(this);
        this.sendForkRequest = this.sendForkRequest.bind(this);
        this.initShareButtons = this.initShareButtons.bind(this);
        this.initUploadDownloadButtons = this.initUploadDownloadButtons.bind(this);
        this.initShare = this.initShare.bind(this);

        this.theme = Cookies.get('theme') ? Cookies.get('theme') : 'light';
    }

    init() {
        super.init();
        this.initThemeButton();
    }

    isThisShare() {
        let gon = window.gon;
        return gon != undefined && gon.reference_number != undefined && gon.version != undefined;
    }

    initShare() {
        console.log('init share');
        if (this.isThisShare()) {

            this.onShareLoad(window.gon.input);

            new ClipboardJS('#share-btn', {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $('#share-btn').tooltip('hide');
                }, 2000);
            });
        }

        this.initShareButtons();
    }

    initShareButtons() {
        let _this = this;

        if (this.isThisShare()) {

            $('#share-btn').show().tooltip(
                {
                    placement: 'top',
                    title: 'The link has been copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            $('.link-copy').show().find('span').text(window.gon.base_url + window.gon.reference_number + '/' + window.gon.version);

            $('.link-copy .copy').tooltip(
                {
                    placement: 'top',
                    title: 'Copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            new ClipboardJS('.link-copy .copy', {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $('.link-copy .copy').tooltip('hide');
                }, 2000);
            });

            $('#fork-btn').show().click(function () {
                _this.sendForkRequest();
            });

            $('#new-btn').show().click(function () {
                window.location.href = window.gon.base_url;
            });
        }

        $('#share-btn').click(function () {
            if (!_this.isThisShare()) {
                _this.sendShareRequest();
            }
        });
    }

    initThemeButton() {
        let _this = this;
        let theme = this.theme;
        $('#theme').select2({width: 70, minimumResultsForSearch: Infinity});
        $('#theme').val(theme).trigger('change');

        $('#theme').change(function($theme) {
            theme = $theme.target.value.toLowerCase();
            Cookies.set('theme', theme);

            if (theme == 'light') {
                $('#light_theme_stylesheet').removeAttr('disabled');
                $('#dark_theme_stylesheet').attr('disabled', 'disabled');
            } else {
                $('#dark_theme_stylesheet').removeAttr('disabled');
                $('#light_theme_stylesheet').attr('disabled', 'disabled');
            }

            _this.onThemeChange(theme);
        });
    }

    initUploadDownloadButtons() {
        let _this = this;

        $('#upload-btn').click(function() {
            $('input[type=file]').click();
        });

        $('input[type=file]').change(function() {
            let fd = new FormData();
            fd.append('file', $('input[type=file]')[0].files[0]);
            _this.showLoadingOverlay();

            $.ajax({
                url: _this.uploadUrl,
                data: fd,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(response){
                    _this.onUploadSuccess(response);
                    _this.closeLoadingOverlay();
                },
                fail: function() {
                    _this.closeLoadingOverlay();
                },
                always: function () {
                    _this.closeLoadingOverlay();
                }
            });
        });

        let $downloadFileNameModal = $(DOWNLOAD_FILE_NAME_MODAL);

        $('body').append($downloadFileNameModal);

        let validateDownloadFileName = function() {
            let fileName = $('#download_file_name').val();
            if (fileName == "") {
                $('#download_file_name').addClass('is-invalid');
                $downloadFileNameModal.find('.invalid-feedback').show();
                return false;
            } else {
                $('#download_file_name').removeClass('is-invalid');
                $downloadFileNameModal.find('.invalid-feedback').hide();
                return true;
            }
        };

        let $downloadForm = $('<form method="post"></form>');
        $('body').append($downloadForm);

        $downloadFileNameModal.on('shown.bs.modal', function () {
            if (_this.uploadFileName != undefined) {
                $('#download_file_name').val(_this.uploadFileName);
            } else {
                let language = _this.getSelectedLanguage();
                let extension = language != null && language.extensions && language.extensions.length > 0 ?
                    language.extensions[0] : '.txt';
                $('#download_file_name').val(moment().format("MMM_DD_YY_h_mm_ss_A") + extension);
            }

            $('#download_file_name').on('input', function() {
                validateDownloadFileName();
            });
        });

        $('#download-btn').click(function() {
            if (validateDownloadFileName()) {
                let fileName = $('#download_file_name').val();

                $('<input />').attr({
                    type: 'hidden',
                    name: 'code',
                    value: _this.getCode()
                }).appendTo($downloadForm);

                $('<input />').attr({
                    type: 'hidden',
                    name: 'fileName',
                    value: fileName
                }).appendTo($downloadForm);

                $downloadForm.attr("action", _this.downloadUrl).attr('target', '_blank').submit();

                $downloadFileNameModal.modal('hide');
            }
        });
    }

    sendShareRequest() {
        let _this = this;

        let input = this.getInput();

        console.log(input);

        if (input != null) {
            this.showLoadingOverlay();

            $.post(_this.shareUrl, {
                input: input
            }, function (response) {
                window.location.href = window.gon.base_url + response.reference_number + '/' + response.version;
            })
                .fail(function (response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                })
                .always(function () {
                    _this.closeLoadingOverlay();
                });
        }
    }

    sendForkRequest() {
        let _this = this;

        let input = this.getInput();

        if (input != null) {

            $.post(_this.forkUrl, {
                input: _this.getInput(),
                reference_number: window.gon.reference_number
            }, function (response) {
                window.location.href = window.gon.base_url + response.reference_number + '/' + response.version;
            })
                .fail(function (response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                })
                .always(function () {
                    _this.closeLoadingOverlay();
                });
        }
    }

    getInput() {
        return null;
    }

    getCode() {
        return null;
    }

    afterSendBeautifyRequest() {
        $('#share-btn').show();
    }

    onShareLoad() {
    }

    onThemeChange() {
    }

    onUploadSuccess() {
    }

    getSelectedLanguage() {
    }
}
