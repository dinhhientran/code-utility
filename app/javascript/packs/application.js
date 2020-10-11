import Html2PugPage from "./pages/html2pug_page";

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")

import $ from 'jquery'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import AlignHashPage from "./pages/align_hash_page.js";
import BeautifyCodePage from "./pages/beautify_code_page.js";
import BeautifyJsonPage from "./pages/beautify_json_page.js";
import Html2HamlPage from "./pages/html2haml_page.js";
import Html2SlimPage from "./pages/html2slim_page";
import Html2JsxPage from "./pages/html2jsx_page";
import Css2scssPage from "./pages/css2scss_page";
import Json2yamlPage from "./pages/json2yaml_page";
import MinifyHtmlPage from "./pages/minify_html_page";
import MinifyJavascriptPage from "./pages/minify_javascript_page";
import MinifyCssPage from "./pages/minify_css_page";
import MinifyJsonPage from "./pages/minify_json_page";
import MinifySqlPage from "./pages/minify_sql_page";
import UriEncodePage from "./pages/uri_encode_page";

$( document ).on('turbolinks:load', function() {

    let tool = window.gon.tool;
    let page = null;

    switch(tool) {
        case 'align_hash':
            page = new AlignHashPage();
            break;
        case 'beautify_code':
            page = new BeautifyCodePage();
            break;
        case 'beautify_json':
            page = new BeautifyJsonPage();
            break;
        case 'html2haml':
            page = new Html2HamlPage();
            break;
        case 'html2slim':
            page = new Html2SlimPage();
            break;
        case 'html2jsx':
            page = new Html2JsxPage();
            break;
        case 'html2pug':
            page = new Html2PugPage();
            break;
        case 'css2scss':
            page = new Css2scssPage();
            break;
        case 'json2yaml':
            page = new Json2yamlPage();
            break;
        case 'minify_html':
            page = new MinifyHtmlPage();
            break;
        case 'minify_javascript':
            page = new MinifyJavascriptPage();
            break;
        case 'minify_css':
            page = new MinifyCssPage();
            break;
        case 'minify_json':
            page = new MinifyJsonPage();
            break;
        case 'minify_sql':
            page = new MinifySqlPage();
            break;
        case 'uri_encode':
            page = new UriEncodePage();
            break;
    }

    if (page != null) {
        page.beforeInit();
        page.init();
        page.afterInit();
    }

});
