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
import 'select2/dist/css/select2.css'
import 'select2'
import CodeMirror from "codemirror/lib/codemirror.js";
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/perl/perl.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/groovy/groovy.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/mdn-like.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/darcula.css'
import 'gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js'
import Toastr from "toastr/build/toastr.min.js"
import 'toastr/build/toastr.min.css'
import 'bootstrap-input-spinner/src/bootstrap-input-spinner.js'
import Cookies from 'js-cookie/src/js.cookie.js'
import ClipboardJS from 'clipboard/dist/clipboard.min.js'

$(document).ready(function() {
    let theme = Cookies.get('theme') ? Cookies.get('theme') : 'light';

    const LANGUAGE = {
        php: {
            mode: 'text/x-php',
            sample: '// Sample input\n\n' +
                'array(\n' +
                '  "Product ID" => 10440,\n' +
                '  "SKU" => "KOI-721",\n' +
                '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL" => "https=>//www.domain.com/product/koi-721",\n' +
                '  "Price" => 52,\n' +
                '  "Retail Price" => 78,\n' +
                '  "Thumbnail URL" => "https=>//www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                '  "Description" => "Sociosqu facilisis duis ...",\n' +
                '  "Date Created" => "2018-03-03 17=>38=>50"\n' +
                ')\n',
            comment: '//'
        },
        ruby: {
            mode: 'text/x-ruby',
            sample: '# Sample input\n\n' +
                '{\n' +
                '  "Product ID" => 10440,\n' +
                '  "SKU" => "KOI-721",\n' +
                '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL" => "https=>//www.domain.com/product/koi-721",\n' +
                '  "Price" => 52,\n' +
                '  "Retail Price" => 78,\n' +
                '  "Thumbnail URL" => "https=>//www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                '  "Description" => "Sociosqu facilisis duis ...",\n' +
                '  "Date Created" => "2018-03-03 17=>38=>50"\n' +
                '}',
            comment: '#'
        },
        javascript: {
            mode: 'text/typescript',
            sample: '// Sample input\n\n' +
                '{\n' +
                '  "Product ID":10440,\n' +
                '  "SKU":"KOI-721",\n' +
                '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                '  "Price":52,\n' +
                '  "Retail Price":78,\n' +
                '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                '  "Description":"Sociosqu facilisis duis ...",\n' +
                '  "Date Created":"2018-03-03 17:38:50"\n' +
                '}',
            comment: '//'
        },
        python: {
            mode: 'text/x-python',
            sample: '// Sample input\n\n' +
                '{\n' +
                '  "Product ID":10440,\n' +
                '  "SKU":"KOI-721",\n' +
                '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                '  "Price":52,\n' +
                '  "Retail Price":78,\n' +
                '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                '  "Description":"Sociosqu facilisis duis ...",\n' +
                '  "Date Created":"2018-03-03 17:38:50"\n' +
                '}',
            comment: '//'
        },
        perl: {
            mode: 'text/x-perl',
            sample: '# Sample input\n\n' +
                '(\n' +
                '  "Product ID" => 10440,\n' +
                '  "SKU" => "KOI-721",\n' +
                '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL" => "https=>//www.domain.com/product/koi-721",\n' +
                '  "Price" => 52,\n' +
                '  "Retail Price" => 78,\n' +
                '  "Thumbnail URL" => "https=>//www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                '  "Description" => "Sociosqu facilisis duis ...",\n' +
                '  "Date Created" => "2018-03-03 17=>38=>50"\n' +
                ')',
            comment: '#'
        },
        groovy: {
            mode: 'text/x-groovy',
            sample: '// Sample input\n\n' +
                '[\n' +
                '  "Product ID":10440,\n' +
                '  "SKU":"KOI-721",\n' +
                '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                '  "Price":52,\n' +
                '  "Retail Price":78,\n' +
                '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                '  "Description":"Sociosqu facilisis duis ...",\n' +
                '  "Date Created":"2018-03-03 17:38:50"\n' +
                ']',
            comment: '//'
        }
    };

    $('#language').select2({width: 200, minimumResultsForSearch: Infinity, placeholder: "Select a language"});

    $('#theme').select2({width: 70, minimumResultsForSearch: Infinity});
    $('#theme').val(theme).trigger('change');

    const EDITOR_DARK_THEME = 'darcula';
    const EDITOR_LIGHT_THEME = 'eclipse';

    let getEditorTheme = function(theme) {
        if (theme == 'light') {
            return EDITOR_LIGHT_THEME;
        } else {
            return EDITOR_DARK_THEME;
        }
    };

    let sourceCodeMirror = CodeMirror.fromTextArea(document.getElementById("source"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme: getEditorTheme(theme),
    });
    let targetCodeMirror = CodeMirror.fromTextArea(document.getElementById("target"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme: getEditorTheme(theme)
    });

    let $sourceEditorButtons = $('<div class="editor-buttons"><button class="btn btn-sm btn-secondary mr-2 clear">Clear</button><button class="btn btn-sm btn-secondary mr-2 paste">Paste</button><button type="button" class="btn btn-sm btn-secondary wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-circle fa-w-16 fa-fw fa-2x" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button><button data-editor="source" class="btn btn-sm btn-secondary ml-2 maximize">Maximize</button></div>');
    $sourceEditorButtons.prependTo($('#source').next());

    let $targetEditorButtons = $('<div class="editor-buttons"><button class="btn btn-sm btn-secondary mr-2 copy">Copy</button><button type="button" class="btn btn-sm btn-secondary wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-circle fa-w-16 fa-fw fa-2x" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button><button data-editor="target" class="btn btn-sm btn-secondary ml-2 maximize">Maximize</button></div>');
    $targetEditorButtons.prependTo($('#target').next());

    $('.wrap').click(function() {
       let $textarea = $(this).closest('.CodeMirror').prev();
       let editor = $textarea.attr('id') == 'source' ? sourceCodeMirror : targetCodeMirror;
       if (!$(this).hasClass('active')) {
           editor.setOption('lineWrapping', true);
       } else {
           editor.setOption('lineWrapping', false);
       }
    });

    $('.clear').click(function() {
        sourceCodeMirror.setValue('');
        sourceCodeMirror.save();
    });

    new ClipboardJS('.copy', {
        text: function(trigger) {
            return targetCodeMirror.getValue();
        }
    }).on('success', function (e) {
        Toastr.info("Copied!");
    });

    $('.paste').click(function(e) {
        navigator.clipboard.readText()
            .then(text => {
                sourceCodeMirror.setValue(text);
                sourceCodeMirror.save();
            })
            .catch(() => {
                console.log('error')
            });
    });

    $('.maximize').click(function(e) {
        let editor = $(this).data('editor');
        if ($(this).hasClass('maximize')) {
            $('.button-column').hide();
            if (editor == 'source') {
                $('.target-column').hide();
                $('.source-column').removeClass('col-md-5_5');
                $('.source-column').addClass('col-md-12');
            } else {
                $('.source-column').hide();
                $('.target-column').removeClass('col-md-5_5');
                $('.target-column').addClass('col-md-12');
            }
            $(this).text('Minimize');
            $(this).removeClass('maximize');
            $(this).addClass('minimize');
        } else {
            $('.button-column').show();
            if (editor == 'source') {
                $('.target-column').show();
                $('.source-column').removeClass('col-md-12');
                $('.source-column').addClass('col-md-5_5');
            } else {
                $('.source-column').show();
                $('.target-column').removeClass('col-md-12');
                $('.target-column').addClass('col-md-5_5');
            }
            $(this).text('Maximize');
            $(this).removeClass('minimize');
            $(this).addClass('maximize');
        }
    });

    $('#language').change(function() {
        let language = $(this).val();
        sourceCodeMirror.setOption("mode", LANGUAGE[language].mode);
        targetCodeMirror.setOption("mode", LANGUAGE[language].mode);

        let currentSourceContent = sourceCodeMirror.getValue().trim();

        let isSample = false;
        for ( const [language, data] of Object.entries(LANGUAGE)) {
            if (data.sample.trim() == currentSourceContent) {
                isSample = true;
                break;
            }
        }

        if (isSample || currentSourceContent == "") {
            sourceCodeMirror.setValue(LANGUAGE[language].sample);
            sourceCodeMirror.save();
        }
    });

    let setEditorHeight = function() {
        let editorHeight = $(window).height() - $('h1').height() - $('.input-options').height() - 150;
        sourceCodeMirror.setSize(null, editorHeight);
        targetCodeMirror.setSize(null, editorHeight);
    };
    setEditorHeight();
    $(window).resize(function() {
      setEditorHeight();
    });

    $('#indent-spaces').inputSpinner({groupClass: 'indent-spaces'});

    $('#theme').change(function($theme) {
        theme = $theme.target.value.toLowerCase();
        Cookies.set('theme', theme);
        sourceCodeMirror.setOption("theme", getEditorTheme(theme));
        targetCodeMirror.setOption("theme", getEditorTheme(theme));
        if (theme == 'light') {
            $('#light_theme_stylesheet').removeAttr('disabled');
            $('#dark_theme_stylesheet').attr('disabled', 'disabled');
        } else {
            $('#dark_theme_stylesheet').removeAttr('disabled');
            $('#light_theme_stylesheet').attr('disabled', 'disabled');
        }
    });

    let showLoadingOverlay = function() {
        $.LoadingOverlay("show", {
            imageAnimation: 0,
            image: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n' +
                '<g transform="translate(50 50)"> <g transform="translate(-17 -17) scale(0.5)"> <g>\n' +
                '<animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="0s" repeatCount="indefinite"></animateTransform><path d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#93dbe9"></path></g></g> <g transform="translate(0 22) scale(0.4)"> <g>\n' +
                '<animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform><path d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#689cc5"></path></g></g> <g transform="translate(28 4) scale(0.3)"> <g>\n' +
                '<animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform><path d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#5e6fa3"></path></g></g></g>\n' +
                '</svg>',
            background  : "rgba(255, 255, 255, 0.4)",
            imageColor: null,
        });
    };

    let closeLoadingOverlay = function() {
        $.LoadingOverlay("hide");
    };

    let sendRequest = function() {
        let language = $('#language').val();

        if (language == undefined || language == "") {
            return;
        }

        let hashContent = sourceCodeMirror.getValue().trim();
        hashContent = hashContent.replace(/\r\n/g, "\n");
        let filteredLines = [];

        hashContent.split('\n').forEach(function(line) {
           if (!line.trim().startsWith(LANGUAGE[language]['comment'])) {
               filteredLines.push(line);
           }
        });

        if (hashContent != "") {
            showLoadingOverlay();
            let $btn = $(this);
            $btn.hide();

            $.post("/hash/beautify", {
                language: language,
                hash: filteredLines.join("\n"),
                indent: $('.indent-spaces .form-control-sm').val(),
                valueAligned: $('#value-aligned-check').is(":checked") ? 1 : 0
            }, function (response) {
                targetCodeMirror.setValue(response.hash);
            })
                .fail(function (response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                })
                .always(function () {
                    $btn.show();
                    closeLoadingOverlay();
                });
        }
    };

    $("#beautify-btn").click(function() {
        sendRequest();
    });

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            sendRequest();
        }
    });
});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
