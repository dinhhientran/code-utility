// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")

import $ from 'jquery'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import AlignHashPage from "./alignHashPage.js";
import BeautifyCodePage from "./beautifyCodePage.js";

$( document ).on('turbolinks:load', function() {

    let page = null;
    if (window.gon.tool == 'align') {
        page = new AlignHashPage();
    } else if (window.gon.tool == 'beautify_code') {
        page = new BeautifyCodePage();
    }

    if (page != null) {
        page.init();
    }

});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
