import $ from "jquery";
import 'gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js'
import Cookies from "js-cookie";

import {SIGN_IN_MODAL} from "../../modals/sign_in";
import {COOKIE_SETTINGS_MODAL} from "../../modals/cookie_settings";

export default class BasePage {

    constructor() {
        this.init = this.init.bind(this);
        this.initMegaMenu = this.initMegaMenu.bind(this);
        this.initSignInModal = this.initSignInModal.bind(this);
        this.initCookieSettings = this.initCookieSettings.bind(this);
        this.beforeInit = this.beforeInit.bind(this);
        this.afterInit = this.afterInit.bind(this);
    }

    init() {
        this.$footer = $('footer');
        this.$megamenuli = $('#main-menu-li');

        this.initMegaMenu();

        this.initSignInModal();

        this.initCookieSettings();
    }

    popupWindow(url, windowName, win, w, h) {
        const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
        const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
        return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
    }

    initSignInModal() {
        this.$signInModal = $(SIGN_IN_MODAL);
        $('body').append(this.$signInModal);

        this.$signInGoogleBtn = $('#sign_in_google_btn');
        this.$signInGithubBtn = $('#sign_in_github_btn');

        let _this = this;
        this.$signInGoogleBtn.click(function() {
           _this.$googleAuthWindow = _this.popupWindow(window.gon.google_auth_url, "Sign in to CodeUtility with Google", window, 500, 600);
        });

        this.$signInGithubBtn.click(function() {
            _this.$googleAuthWindow = _this.popupWindow(window.gon.github_auth_url, "Sign in to CodeUtility with Github", window, 500, 600);
        });
    }

    initCookieSettings() {
        let _this = this;

        this.$cookieSettingModal = $(COOKIE_SETTINGS_MODAL)
        $('body').append(this.$cookieSettingModal);

        let privacyContentShort = `
        This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies
        that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities
        `;

        let restOfPrivacyContent = `
         of the website. We also use third-party cookies
        that help us analyze and understand how you use this website. These cookies will be
        stored in your browser only with your consent. You also have the option to opt-out of
        these cookies. But opting out of some of these cookies may have an effect on your
        browsing experience.
        `;

        $('#cookie-setting-privacy-see-btn').click(function() {
            let $privacyTextContainer = $('#cookie-setting-privacy-content-text');
            if ($(this).data('see') == 'more') {
                $privacyTextContainer.text(privacyContentShort + restOfPrivacyContent);
                $(this).data('see', 'less');
                $(this).text('See less');
            } else {
                $privacyTextContainer.text(privacyContentShort + "...");
                $(this).data('see', 'more');
                $(this).text('See more');
            }
        });

        $('#cookie-settings-accept').click(function() {
            _this.setCookie("non_necessary_cookie_enabled", "yes", 90);
            $('#cookie-law-info-bar').hide();
        });

        $('#cookie-save-btn').click(function() {
            let nonNecessaryEnabled = $('#cookie-setting-non-necessary-enabled').is(':checked');
            _this.setCookie("non_necessary_cookie_enabled", nonNecessaryEnabled ? 'yes' : 'no', 90);
            _this.$cookieSettingModal.modal('hide');
            $('#cookie-law-info-bar').hide();
        });

        if (Cookies.get('non_necessary_cookie_enabled') != "yes") {
            $('#cookie-law-info-bar').show();
        }
    }

    setMegaMenuButtonMargin() {
        let megaMenuBtnMargin = parseInt($(window).width() / 2) - 305;
        this.$megamenuli.css("margin-left", megaMenuBtnMargin);
        this.$megamenuli.show();
    }

    initMegaMenu() {
        let _this = this;
        this.setMegaMenuButtonMargin();
        $(window).resize(function() {
            _this.setMegaMenuButtonMargin();
        });



        if (window.gon.page != 'home') {

            if ($('.nav-link.dropdown-toggle').is(':visible')) {
                $('.nav-link.dropdown-toggle').tooltip({
                    placement: 'bottom',
                    title: 'More tools here!',
                    trigger: 'manual',
                    boundary: 'window'
                });

                setTimeout(function () {
                    $('.nav-link.dropdown-toggle').tooltip('show');
                }, 5000);

                setTimeout(function () {
                    $('.nav-link.dropdown-toggle').tooltip('hide');
                }, 10000);
            }
        }
    }

    showLoadingOverlay() {
        $.LoadingOverlay("show", {
            imageAnimation: 0,
            image: `<svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1"></animateTransform>
  </circle>
  <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2"></animateTransform>
  </circle>
  <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
  </circle>
</svg>`,
            background  : "rgba(255, 255, 255, 0.4)",
            imageColor: null,
        });
    };

    closeLoadingOverlay() {
        $.LoadingOverlay("hide");
    }

    setCookie(name, value, expiresIn) {
        let url = new URL(window.gon.base_url);
        if (expiresIn != undefined) {
            Cookies.set(name, value, {path: '', domain: '.' + url.hostname, expires: expiresIn});
        } else {
            Cookies.set(name, value, {path: '', domain: '.' + url.hostname});
        }
    }

    beforeInit() {
        $.ajaxSetup({
            headers:
                { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });

        let url = new URL(window.gon.base_url);

        document.domain = url.hostname;

        this.showLoadingOverlay();
        $('main').css({visibility: 'hidden'});
    }

    afterInit() {
        this.closeLoadingOverlay();
        $('main').show().css({visibility: 'visible'});
    }
}