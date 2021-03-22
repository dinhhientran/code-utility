import $ from "jquery";
import BasePage from "./abstracts/base_page";

export default class LoginPage extends BasePage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
    }

    init() {
        super.init();

        this.$signInModal.modal({backdrop: 'static', keyboard: false});
        this.$signInModal.modal('show');

        $('button[data-target="#sign_in_modal"]').hide();
    }

}