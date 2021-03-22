import $ from 'jquery'
import bootbox from 'bootbox/dist/bootbox.min.js'
import ClipboardJS from 'clipboard/dist/clipboard.min.js'
import Toastr from "toastr/build/toastr.min.js";
import BasePage from "./abstracts/base_page";

export default class YourSharesPage extends BasePage {

    constructor(props) {
        super(props);

        this.sendDeleteShareRequest = this.sendDeleteShareRequest.bind(this);
        this.initDeleteButtons = this.initDeleteButtons.bind(this);

        this.deleteShareUrl = window.gon.base_url + '/users/shares/delete';
    }

    init() {
        super.init();

        this.focusSearchBox();

        this.initCopyButtons();

        this.initDeleteButtons();
    }

    focusSearchBox() {
        setTimeout(function() {
            let $searchBoxInput = $('#search-box input[type=search]');
            let keyword = $searchBoxInput.val();
            $searchBoxInput.focus().val('').val(keyword);
        }, 1000);
    }

    initCopyButtons() {
        $('#your-shares-container').find('.copy').tooltip(
            {
                placement: 'top',
                title: 'Copied!',
                trigger: 'click',
                delay: {show: 300, hide: 0}
            }
        );

        new ClipboardJS('#your-shares-container .copy', {
            text: function (trigger) {
                return $(trigger).prev().text();
            }
        }).on('success', function (e) {
            setTimeout(function () {
                $(e.trigger).tooltip('hide');
            }, 4000);
        });
    }

    initDeleteButtons() {
        let _this = this;

        $('#your-shares-container').find('.close').click(function() {
            let title = $(this).parent().find('.card-title').text();
            let version_id = $(this).data('version-id');
            let $shareCard = $(this).parent();
            bootbox.confirm({
                message: "Are you sure you want to delete this share?<p class='mt-2'><small><b>" + title + "</b></small></p>",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        _this.sendDeleteShareRequest(version_id, $shareCard);
                    }
                }
            });
            let w = $( window ).height();
            let b = 126;
            let h = (w-b)/3 - 40;
            $(".bootbox-confirm")[0].style.setProperty('top', h + "px", 'important');
        });
    }

    sendDeleteShareRequest(version_id, $el) {
        this.showLoadingOverlay();

        let _this = this;

        $.ajax({
            type: 'DELETE',
            url: _this.deleteShareUrl,
            crossDomain: true,
            data: {
                version_id: version_id
            },
            xhrFields: {
                withCredentials: true
            },
            dataType: 'json',
            success: function(response, textStatus, jqXHR) {
                Toastr.success("Deleted successfully!");
                $el.remove();
                setTimeout(function() {
                    window.location.reload();
                }, 1000);
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