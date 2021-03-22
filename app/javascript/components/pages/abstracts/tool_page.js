import $ from "jquery";
import BasePage from "./base_page";
import Toastr from "toastr/build/toastr.min.js"
import Cookies from "js-cookie"
import ClipboardJS from 'clipboard/dist/clipboard.min.js'
import {DOWNLOAD_FILE_NAME_MODAL} from "../../modals/download_file_name";
import {ENTER_SHARE_NAME_MODAL} from "../../modals/enter_share_name";

import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import ruby from 'highlight.js/lib/languages/ruby';
import xml from 'highlight.js/lib/languages/xml';
import erb from 'highlight.js/lib/languages/erb';
import haml from 'highlight.js/lib/languages/haml';
import yaml from 'highlight.js/lib/languages/yaml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import sass from 'highlight.js/lib/languages/sas';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('c', c);
hljs.registerLanguage('json', json);
hljs.registerLanguage('php', php);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('erb', erb);
hljs.registerLanguage('haml', haml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('sass', sass);
hljs.registerLanguage('javascript', javascript);

export default class ToolPage extends BasePage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
        this.initShareButtons = this.initShareButtons.bind(this);
        this.initFavoriteButton = this.initFavoriteButton.bind(this);
        this.initShare = this.initShare.bind(this);
        this.initUploadDownloadButtons = this.initUploadDownloadButtons.bind(this);
        this.initUploadButton = this.initUploadButton.bind(this);
        this.initDownloadButton = this.initDownloadButton.bind(this);
        this.initScreenshotPage = this.initScreenshotPage.bind(this);
        this.showShareButton = this.showShareButton.bind(this);
        this.sendShareRequest = this.sendShareRequest.bind(this);
        this.sendForkRequest = this.sendForkRequest.bind(this);
        this.calculateEditorHeight = this.calculateEditorHeight.bind(this);
        this.removeColumnWidthHeight = this.removeColumnWidthHeight.bind(this);

        this.uploadUrl = window.gon.base_url + '/file/upload';
        this.downloadUrl = window.gon.base_url + '/file/download';
        this.addFavoriteToolUrl = window.gon.base_url + '/user/add_favorite_tool'
        this.cookieSampleCodeSuffix = '_sample_code';
    }

    init() {
        super.init();

        this.theme = Cookies.get('theme') ? Cookies.get('theme') : 'light';

        let showSampleCodeCookie = Cookies.get(window.gon.tool + this.cookieSampleCodeSuffix);

        this.showSampleCode = showSampleCodeCookie ? showSampleCodeCookie == 'true' : true;

        this.shareBtnId = '#share-btn';
        this.favoriteBtnId = '#favorite-btn';
        this.copyLinkClass = '.link-copy';
        this.$copyLink = $(this.copyLinkClass);
        this.$shareBtn = $(this.shareBtnId);
        this.$favoriteBtn = $(this.favoriteBtnId);
        this.$forkBtn = $('#fork-btn');
        this.$newBtn = $('#new-btn');
        this.downloadBtnId = '#download-btn';
        this.$uploadBtn = $('#upload-btn');
        this.$themeDdl = $('#theme');
        this.$lightThemeStylesheet = $('#light_theme_stylesheet');
        this.$darkThemeStylesheet = $('#dark_theme_stylesheet');
        this.$fileInput = $('input[type=file]');
        this.downloadFileNameInputId = '#download_file_name';

        this.initThemeButton();

        this.$shareBtn.hide();

        if (window.gon.screenshot) {
            this.initScreenshotPage();
        }
    }

    initScreenshotPage() {
        $('header').hide();
        $('footer').hide();
    }

    isThisShare() {
        let gon = window.gon;
        return gon != undefined && gon.reference_number != undefined && gon.version != undefined;
    }

    initShare() {
        if (this.isThisShare()) {

            this.onShareLoad(window.gon.input);

            new ClipboardJS(this.shareBtnId, {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $(this.shareBtnId).tooltip('hide');
                }, 2000);
            });
        }

        this.initShareButtons();
        this.initFavoriteButton();
    }

    initShareButtons() {
        let _this = this;

        if (this.isThisShare()) {

            $(this.shareBtnId).show().tooltip(
                {
                    placement: 'top',
                    title: 'The link has been copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            this.$copyLink.show().find('span').text(window.gon.base_url + window.gon.reference_number + '/' + window.gon.version);

            this.$copyLink.find('.copy').tooltip(
                {
                    placement: 'top',
                    title: 'Copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            new ClipboardJS(this.copyLinkClass + ' .copy', {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $('.link-copy .copy').tooltip('hide');
                }, 2000);
            });

            this.$forkBtn.show().click(function () {
                _this.sendForkRequest();
            });

            this.$newBtn.show().click(function () {
                window.location.href = window.gon.tool_url;
            });
        }

        this.$shareBtn.click(function () {
            if (!_this.isThisShare()) {
                if (window.gon.current_user != undefined) {
                    if (_this.$shareNameModal == undefined) {
                        _this.$shareNameModal = $(ENTER_SHARE_NAME_MODAL);
                        $('body').append(_this.$shareNameModal);
                    }

                    _this.$shareNameModal.modal('show');

                    let m = new Date();
                    let date =
                        m.getUTCFullYear() + "-" +
                        ("0" + (m.getUTCMonth()+1)).slice(-2) + "-" +
                        ("0" + m.getUTCDate()).slice(-2) + "_" +
                        ("0" + m.getUTCHours()).slice(-2) + ":" +
                        ("0" + m.getUTCMinutes()).slice(-2) + ":" +
                        ("0" + m.getUTCSeconds()).slice(-2);

                    let $shareNameInput = $('#share_name');

                    let shareNamePrefix = _this.getShareNamePrefix();
                    if (shareNamePrefix != "") {
                        shareNamePrefix += " ";
                    }

                    $shareNameInput.val(shareNamePrefix +  date);

                    let validateShareName = function() {
                        let fileName = $shareNameInput.val();
                        if (fileName == "") {
                            $shareNameInput.addClass('is-invalid');
                            _this.$shareNameModal.find('.invalid-feedback').show();
                            return false;
                        } else {
                            $shareNameInput.removeClass('is-invalid');
                            _this.$shareNameModal.find('.invalid-feedback').hide();
                            return true;
                        }
                    };

                    validateShareName();

                    $shareNameInput.on('input', function() {
                        validateShareName()
                    });

                    $('#do-share-btn').click(function() {
                        if (validateShareName()) {
                            _this.sendShareRequest();
                        }
                    });

                } else {
                    _this.sendShareRequest();
                }
            }
        });
    }

    initFavoriteButton() {
        let _this = this;
        this.$favoriteBtn.click(function () {
            let tool = window.gon.tool;

            _this.showLoadingOverlay();

            $.ajax({
                type: 'PUT',
                url: _this.addFavoriteToolUrl,
                crossDomain: true,
                data: {
                    tool: tool
                },
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json',
                success: function(response, textStatus, jqXHR) {
                    _this.$favoriteBtn.tooltip(
                        {
                            placement: 'top',
                            title: response.message,
                            trigger: 'manual',
                            delay: {show: 300, hide: 0}
                        }
                    );

                    _this.$favoriteBtn.tooltip('show');

                    setTimeout(function () {
                        _this.$favoriteBtn.tooltip('hide');
                    }, 4000);
                },
                error: function (response, textStatus, errorThrown) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                },
                complete: function () {
                    _this.closeLoadingOverlay();
                }
            });
        });
    }

    initThemeButton() {
        let _this = this;
        let theme = this.theme;
        this.$themeDdl.select2({width: 70, minimumResultsForSearch: Infinity});
        this.$themeDdl.val(theme).trigger('change');

        this.$themeDdl.change(function($theme) {
            theme = $theme.target.value.toLowerCase();
            _this.setCookie('theme', theme);

            if (theme == 'light') {
                _this.$lightThemeStylesheet.removeAttr('disabled');
                _this.$darkThemeStylesheet.attr('disabled', 'disabled');
            } else {
                _this.$darkThemeStylesheet.removeAttr('disabled');
                _this.$lightThemeStylesheet.attr('disabled', 'disabled');
            }

            _this.onThemeChange(theme);
        });
    }

    initUploadDownloadButtons() {
        this.initUploadButton();
        this.initDownloadButton();
    }

    initUploadButton() {
        let _this = this;

        this.$uploadBtn.click(function() {
            _this.$fileInput.click();
        });

        _this.$fileInput.change(function() {
            let fd = new FormData();
            fd.append('file', _this.$fileInput[0].files[0]);
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
                fail: function(response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                    _this.closeLoadingOverlay();
                },
                error: function(response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                    _this.closeLoadingOverlay();
                },
                always: function () {
                    _this.closeLoadingOverlay();
                }
            });
        });
    }

    initDownloadButton() {
        let _this = this;

        let $downloadFileNameModal = $(DOWNLOAD_FILE_NAME_MODAL);

        $('body').append($downloadFileNameModal);

        this.$downloadFileNameInput = $(this.downloadFileNameInputId);

        let validateDownloadFileName = function() {
            let fileName = _this.$downloadFileNameInput.val();
            if (fileName == "") {
                _this.$downloadFileNameInput.addClass('is-invalid');
                $downloadFileNameModal.find('.invalid-feedback').show();
                return false;
            } else {
                _this.$downloadFileNameInput.removeClass('is-invalid');
                $downloadFileNameModal.find('.invalid-feedback').hide();
                return true;
            }
        };

        let $downloadForm = $('<form method="post"></form>');
        $('body').append($downloadForm);

        $downloadFileNameModal.on('shown.bs.modal', function () {
            if (_this.uploadFileName != undefined) {
                _this.$downloadFileNameInput.val(_this.uploadFileName);
            } else {
                let language = _this.getSelectedLanguage();
                let extension = language != null && language.extensions && language.extensions.length > 0 ?
                    language.extensions[0] : '.txt';

                let m = new Date();
                let date =
                    m.getUTCFullYear() + "_" +
                    ("0" + (m.getUTCMonth()+1)).slice(-2) + "_" +
                    ("0" + m.getUTCDate()).slice(-2) + "_" +
                    ("0" + m.getUTCHours()).slice(-2) + "_" +
                    ("0" + m.getUTCMinutes()).slice(-2) + "_" +
                    ("0" + m.getUTCSeconds()).slice(-2);

                _this.$downloadFileNameInput.val(date + extension);
            }

            _this.$downloadFileNameInput.on('input', function() {
                validateDownloadFileName();
            });
        });

        this.$downloadBtn = $(this.downloadBtnId);

        this.$downloadBtn.click(function() {
            if (validateDownloadFileName()) {
                let fileName = _this.$downloadFileNameInput.val();

                $('<input />').attr({
                    type: 'hidden',
                    name: 'code',
                    value: _this.getCodeToDownload()
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
        let name = $('#share_name').val();
        let _public = $('#share_public').is(':checked');

        if (input != null) {
            this.showLoadingOverlay();

            $.ajax({
                type: 'POST',
                url: _this.shareUrl,
                crossDomain: true,
                data: {
                    input: input,
                    name: name,
                    public: _public
                },
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(response, textStatus, jqXHR) {
                    window.location.href = window.gon.base_url + response.reference_number + '/' + response.version;
                    _this.showShareButton();
                },
                error: function (response, textStatus, errorThrown) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                },
                complete: function () {
                    _this.closeLoadingOverlay();
                }
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

    getCodeToDownload() {
        return null;
    }

    getShareNamePrefix() {
        return null;
    }

    showShareButton() {
        this.$shareBtn.parent().parent().show();
        this.$shareBtn.show();
    }

    onShareLoad() {
        this.$shareBtn.parent().parent().show();
    }

    onThemeChange() {
    }

    onUploadSuccess() {
    }

    getSelectedLanguage() {
    }

    calculateEditorHeight() {
        let editorHeight = 0;
        if (this.$headerTextRow.is(':visible')) {
            editorHeight = $(window).height() - this.$headerTextRow.height() - this.$inputOptionRow.height() - 150;
        } else {
            editorHeight = $(window).height() - 120;
        }

        editorHeight = editorHeight < 400 ? 400 : editorHeight;

        return editorHeight;
    }

    removeColumnWidthHeight() {
        let widthCss = {
            width: '',
            flex: '',
            maxWidth: '',
        };

        if (this.$sourceColumn != undefined) {
            this.$sourceColumn.css(widthCss);
        }

        if (this.$targetColumn != undefined) {
            this.$targetColumn.css(widthCss);
        }
    }

    afterInit() {
        super.afterInit();

        // first, find all the div.code blocks
        document.querySelectorAll('pre.code-block code').forEach(block => {
            // then highlight each
            hljs.highlightBlock(block);
        });
    }
}
