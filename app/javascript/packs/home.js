require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap/js/dist/popover.js'
import 'bootstrap/js/dist/tooltip.js'
import 'bootstrap/js/dist/dropdown.js'

import $ from 'jquery'

import '../lib/font_awesome/min.css'
import '../lib/font_awesome/min.js'

import HomePage from "../components/pages/home_page";

$( document ).on('turbolinks:load', function() {

    let page = new HomePage();

    page.beforeInit();
    page.init();
    page.afterInit();

});
