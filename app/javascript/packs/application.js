require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("bootstrap/dist/js/bootstrap")

import $ from 'jquery'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import AlignHashPage from "../components/pages/align_hash_page";
import BeautifyCodePage from "../components/pages/beautify_code_page";
import BeautifyJsonPage from "../components/pages/beautify_json_page";
import Html2HamlPage from "../components/pages/html2haml_page";
import Html2SlimPage from "../components/pages/html2slim_page";
import Html2JsxPage from "../components/pages/html2jsx_page";
import Html2PugPage from "../components/pages/html2pug_page";
import Css2scssPage from "../components/pages/css2scss_page";
import Json2yamlPage from "../components/pages/json2yaml_page";
import MinifyHtmlPage from "../components/pages/minify_html_page";
import MinifyJavascriptPage from "../components/pages/minify_javascript_page";
import MinifyCssPage from "../components/pages/minify_css_page";
import MinifyJsonPage from "../components/pages/minify_json_page";
import MinifySqlPage from "../components/pages/minify_sql_page";
import UriEncodePage from "../components/pages/uri_encode_page";
import HtmlEncodePage from "../components/pages/html_encode_page";
import HexEncodePage from "../components/pages/hex_encode_page";
import Base64EncodePage from "../components/pages/base64_encode_page";
import Md5EncryptPage from "../components/pages/md5_encrypt_page";
import ShaEncryptPage from "../components/pages/sha_encrypt_page";
import HomePage from "../components/pages/home_page";

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

    if (tool == null) {
        if (window.gon.page == 'home') {
            page = new HomePage();
        }
    }

    if (page != null) {
        page.beforeInit();
        page.init();
        page.afterInit();
    }

});
