require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap/js/dist/popover.js'
import 'bootstrap/js/dist/tooltip.js'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/modal.js'
import 'bootstrap/js/dist/tab.js'
import 'bootstrap/js/dist/util.js'
import 'bootstrap/js/dist/collapse.js'

import $ from 'jquery'

import '../lib/font_awesome/min.css'
import '../lib/font_awesome/min.js'

import HomePage from "../components/pages/home_page";
import ProfilePage from "../components/pages/profile_page";
import YourSharesPage from "../components/pages/your_shares_page";
import LoginPage from "../components/pages/login_page";

$( document ).on('turbolinks:load', function() {

    let page = new HomePage();

    switch (window.gon.page) {
        case 'user':
            page = new ProfilePage();
            break;
        case 'shares':
            page = new YourSharesPage();
            break;
        case 'sessions':
            page = new LoginPage();
            break;
    }

    if (page != null) {
        page.beforeInit();
        page.init();
        page.afterInit();
    }

});
