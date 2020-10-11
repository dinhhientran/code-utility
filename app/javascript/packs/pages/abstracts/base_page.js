import $ from "jquery";
import 'gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js'

export default class BasePage {

    constructor() {
        this.init = this.init.bind(this);
        this.initMegaMenu = this.initMegaMenu.bind(this);
        this.beforeInit = this.beforeInit.bind(this);
        this.afterInit = this.afterInit.bind(this);
    }

    init() {
        this.$footer = $('footer');
        this.$megamenuli = $('.megamenu-li');

        this.initMegaMenu();
    }

    setMegaMenuButtonMargin() {
        let megaMenuBtnMargin = parseInt($(window).width() / 2) - 285;
        this.$megamenuli.css("margin-left", megaMenuBtnMargin);
    }

    initMegaMenu() {
        let _this = this;
        this.setMegaMenuButtonMargin();
        $(window).resize(function() {
            _this.setMegaMenuButtonMargin();
        });
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

    beforeInit() {
        this.showLoadingOverlay();
        $('main').css({visibility: 'hidden'});
    }

    afterInit() {
        this.closeLoadingOverlay();
        $('main').css({visibility: 'visible'});
    }
}