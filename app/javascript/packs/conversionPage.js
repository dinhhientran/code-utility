import $ from "jquery";
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/perl/perl.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/groovy/groovy.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/xml-fold.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/mdn-like.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/darcula.css'
import CodeMirror from "codemirror";
import Cookies from 'js-cookie/src/js.cookie.js'
import ClipboardJS from 'clipboard/dist/clipboard.min.js'
import BasePage from "./basePage.js"

export default class ConversionPage extends BasePage {

    constructor() {
        super();
        this.EDITOR_DARK_THEME = 'darcula';
        this.EDITOR_LIGHT_THEME = 'eclipse';
        this.theme = Cookies.get('theme') ? Cookies.get('theme') : 'light';
        this.sourceCodeMirror = null;
        this.targetCodeMirror = null;

        this.initThemes = this.initThemes.bind(this);
        this.initEditors = this.initEditors.bind(this);
        this.initButtons = this.initButtons.bind(this);
        this.getEditorTheme = this.getEditorTheme.bind(this);
        this.setEditorHeight = this.setEditorHeight.bind(this);
    }

    init() {
        super.init();

        this.initEditors();
        this.initThemes();
    }

    getEditorTheme(theme) {
        if (theme == 'light') {
            return this.EDITOR_LIGHT_THEME;
        } else {
            return this.EDITOR_DARK_THEME;
        }
    }

    initThemes() {
        let _this = this;
        let theme = this.theme;
        $('#theme').select2({width: 70, minimumResultsForSearch: Infinity});
        $('#theme').val(theme).trigger('change');

        $('#theme').change(function($theme) {
            theme = $theme.target.value.toLowerCase();
            Cookies.set('theme', theme);
            _this.sourceCodeMirror.setOption("theme", _this.getEditorTheme(theme));
            _this.targetCodeMirror.setOption("theme", _this.getEditorTheme(theme));
            if (theme == 'light') {
                $('#light_theme_stylesheet').removeAttr('disabled');
                $('#dark_theme_stylesheet').attr('disabled', 'disabled');
            } else {
                $('#dark_theme_stylesheet').removeAttr('disabled');
                $('#light_theme_stylesheet').attr('disabled', 'disabled');
            }
        });
    }

    setEditorHeight() {
        let editorHeight = 0;
        if ($('.h1-row').is(':visible')) {
            editorHeight = $(window).height() - $('.h1-row').height() - $('.input-options').height() - 150;
        } else {
            editorHeight = $(window).height() - 120;
        }
        this.sourceCodeMirror.setSize(null, editorHeight);
        this.targetCodeMirror.setSize(null, editorHeight);
    }

    initEditors() {
        let _this = this;

        this.sourceCodeMirror = CodeMirror.fromTextArea(document.getElementById("source"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: this.getEditorTheme(this.theme),
            extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });
        this.targetCodeMirror = CodeMirror.fromTextArea(document.getElementById("target"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: this.getEditorTheme(this.theme),
            extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });

        let $sourceEditorButtons = $('<div class="editor-buttons"><button class="btn btn-sm btn-secondary mr-2 clear">Clear</button><button class="btn btn-sm btn-secondary mr-2 paste">Paste</button><button type="button" class="btn btn-sm btn-secondary wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button><button data-editor="source" class="btn btn-sm btn-secondary ml-2 maximize">Maximize</button></div>');
        $sourceEditorButtons.prependTo($('#source').next());

        let $targetEditorButtons = $('<div class="editor-buttons"><button class="btn btn-sm btn-secondary mr-2 copy">Copy</button><button type="button" class="btn btn-sm btn-secondary wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button><button data-editor="target" class="btn btn-sm btn-secondary ml-2 maximize">Maximize</button></div>');
        $targetEditorButtons.prependTo($('#target').next());

        $('.wrap').click(function() {
            let $textarea = $(this).closest('.CodeMirror').prev();
            let editor = $textarea.attr('id') == 'source' ? _this.sourceCodeMirror : _this.targetCodeMirror;
            if (!$(this).hasClass('active')) {
                editor.setOption('lineWrapping', true);
            } else {
                editor.setOption('lineWrapping', false);
            }
        });

        $('.clear').click(function() {
            _this.sourceCodeMirror.setValue('');
            _this.sourceCodeMirror.save();
        });

        $('.copy').tooltip(
            {
                placement: 'top',
                title: 'Copied!',
                trigger: 'click'
            }
        );

        new ClipboardJS('.copy', {
            text: function(trigger) {
                return _this.targetCodeMirror.getValue();
            }
        }).on('success', function (e) {
            setTimeout(function() {
                $('.copy').tooltip('hide');
            }, 2000);
        });

        $('.paste').click(function(e) {
            navigator.clipboard.readText()
                .then(text => {
                    _this.sourceCodeMirror.setValue(text);
                    _this.sourceCodeMirror.save();
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
                $('.h1-row').hide();
                $('.input-options').hide();
                $('footer').hide();

                _this.setEditorHeight();
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
                $('.h1-row').show();
                $('.input-options').show();
                $('footer').show();

                _this.setEditorHeight();
            }
        });

        this.setEditorHeight();
        $(window).resize(function() {
            _this.setEditorHeight();
        });
    }

    initButtons() {
        let _this = this;

        if (this.isThisShare()) {

            $('#share-btn').show().tooltip(
                {
                    placement: 'top',
                    title: 'The link has been copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            $('.link-copy').show().find('span').text(window.gon.base_url + window.gon.reference_number + '/' + window.gon.version);

            $('.link-copy .copy').tooltip(
                {
                    placement: 'top',
                    title: 'Copied!',
                    trigger: 'click',
                    delay: {show: 300, hide: 0}
                }
            );

            new ClipboardJS('.link-copy .copy', {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $('.link-copy .copy').tooltip('hide');
                }, 2000);
            });

            $('#fork-btn').show().click(function () {
                _this.sendForkRequest();
            });

            $('#new-btn').show().click(function () {
                window.location.href = window.gon.base_url;
            });
        }

        $('#share-btn').click(function () {
            if (!_this.isThisShare()) {
                _this.sendShareRequest();
            }
        });
    }

    isThisShare() {
        let gon = window.gon;
        return gon != undefined && gon.reference_number != undefined && gon.version != undefined;
    }

    sendForkRequest() {

    }

    sendShareRequest() {

    }
}