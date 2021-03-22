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

import AlignHashPage from "../components/pages/tools/align_hash_page";
import BeautifyCodePage from "../components/pages/tools/beautify_code_page";
import Html2HamlPage from "../components/pages/tools/html2haml_page";
import Html2SlimPage from "../components/pages/tools/html2slim_page";
import Html2JsxPage from "../components/pages/tools/html2jsx_page";
import Html2PugPage from "../components/pages/tools/html2pug_page";
import Css2scssPage from "../components/pages/tools/css2scss_page";
import Json2yamlPage from "../components/pages/tools/json2yaml_page";
import MinifyHtmlPage from "../components/pages/tools/minify_html_page";
import MinifyJavascriptPage from "../components/pages/tools/minify_javascript_page";
import MinifyCssPage from "../components/pages/tools/minify_css_page";
import MinifyJsonPage from "../components/pages/tools/minify_json_page";
import MinifySqlPage from "../components/pages/tools/minify_sql_page";
import UriEncodePage from "../components/pages/tools/uri_encode_page";
import HtmlEncodePage from "../components/pages/tools/html_encode_page";
import HexEncodePage from "../components/pages/tools/hex_encode_page";
import Base64EncodePage from "../components/pages/tools/base64_encode_page";
import Md5EncryptPage from "../components/pages/tools/md5_encrypt_page";
import ShaEncryptPage from "../components/pages/tools/sha_encrypt_page";

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
        case 'html_encode':
            page = new HtmlEncodePage();
            break;
        case 'hex_encode':
            page = new HexEncodePage();
            break;
        case 'base64_encode':
            page = new Base64EncodePage();
            break;
        case 'md5_encrypt':
            page = new Md5EncryptPage();
            break;
        case 'sha_encrypt':
            page = new ShaEncryptPage();
            break;
    }

    if (page != null) {
        page.beforeInit();
        page.init();
        page.afterInit();
    }

});
