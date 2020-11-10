import $ from 'jquery'
import BasePage from "./abstracts/base_page";

export default class HomePage extends BasePage {

    constructor(props) {
        super(props);

    }

    init() {
        super.init();

        $('#h1-container').hide().css({visibility: 'visible'}).fadeIn(2000);

        $('#browser-tools-btn').click(function(e) {
            e.stopPropagation();
            $('.dropdown-toggle').dropdown('toggle');
        });
    }

}