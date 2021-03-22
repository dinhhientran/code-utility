import $ from 'jquery'
import ClipboardJS from 'clipboard/dist/clipboard.min.js'
import BasePage from "./abstracts/base_page";

export default class ProfilePage extends BasePage {

    constructor(props) {
        super(props);

        this.updateNameApiUrl = window.gon.api_url + '/update_name';
        this.uploadAvatarApiUrl = window.gon.api_url + '/update_avatar';
    }

    init() {
        super.init();

        this.$nameEditBtn = $('#full-name-edit-btn');
        this.$nameContainer = $('#profile-page .name');
        this.$nameEditContainer = $('#profile-page .edit-name');
        this.$nameEditInput = $('#profile-page .edit-name input');
        this.$nameUpdateBtn = $('#full-name-update-btn');
        this.$uploadAvatarBtn = $('#upload-avatar-btn');
        this.$avatarInput = $('#avatar-file-form input');
        this.$avatarImg = $('#profile-page .avatar').find('img');

        let _this = this;

        this.$nameEditBtn.click(function() {
            _this.$nameContainer.hide();
            _this.$nameEditContainer.removeClass('d-none');
            _this.$nameEditInput.focus();
            let length = _this.$nameEditInput.val().length * 2;
            _this.$nameEditInput[0].setSelectionRange(length, length);
        });

        this.$nameUpdateBtn.click(function() {
            let name = $.trim(_this.$nameEditInput.val());

            if (name != "") {
                _this.showLoadingOverlay();

                $.post(_this.updateNameApiUrl, {
                    name: name
                }, function () {
                    _this.$nameContainer.find('span').text(name);
                    _this.$nameContainer.show();
                    _this.$nameEditContainer.addClass('d-none');
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
        });

        this.$uploadAvatarBtn.click(function() {
            _this.$avatarInput.click();
        });

        _this.$avatarInput.change(function() {
            let fd = new FormData();
            fd.append('avatar', _this.$avatarInput[0].files[0]);
            _this.showLoadingOverlay();

            $.ajax({
                url: _this.uploadAvatarApiUrl,
                data: fd,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(response){
                    _this.$avatarImg.attr('src', response.avatar_url);
                    _this.closeLoadingOverlay();
                },
                fail: function(response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                },
                error: function(response) {
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

        this.initCopyButtons();
    }

    initCopyButtons() {
        $('#recent-shares-container').find('.copy').tooltip(
            {
                placement: 'top',
                title: 'Copied!',
                trigger: 'click',
                delay: {show: 300, hide: 0}
            }
        );

        new ClipboardJS('#recent-shares-container .copy', {
            text: function (trigger) {
                return $(trigger).prev().text();
            }
        }).on('success', function (e) {
            setTimeout(function () {
                $(e.trigger).tooltip('hide');
            }, 4000);
        });
    }

}