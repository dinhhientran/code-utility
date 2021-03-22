require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")
import 'bootstrap/js/dist/modal.js'
import 'bootstrap/js/dist/tab.js'
import 'bootstrap/js/dist/util.js'
import 'bootstrap/js/dist/collapse.js'

import $ from 'jquery'

import '../lib/font_awesome/min.css'
import '../lib/font_awesome/min.js'
import BeautifyJsonPage from "../components/pages/tools/beautify_json_page";

$( document ).on('turbolinks:load', function() {

    let page = new BeautifyJsonPage();

    page.beforeInit();
    page.init();
    page.afterInit();

});
