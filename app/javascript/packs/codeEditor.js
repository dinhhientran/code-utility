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
import CodeMirror from "codemirror"
import ClipboardJS from 'clipboard/dist/clipboard.min.js'

export default class CodeEditor {

    constructor() {
        this.EDITOR_DARK_THEME = 'darcula';
        this.EDITOR_LIGHT_THEME = 'eclipse';

        this.$codeMirror = null;
    }

    init(options) {
        this.elementId = options.elementId;
        this.theme = options.theme;
        this.onMaximize = options.onMaximize;
        this.onMinimize = options.onMinimize;

        this.$codeMirror = CodeMirror.fromTextArea(document.getElementById(this.elementId), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme: this.getEditorTheme(this.theme),
            extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
        });

        let $clearBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-clear">Clear</button>');
        let $pasteBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-paste">Paste</button>');
        let $copyBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-copy">Copy</button>');
        let $wrapBtn = $('<button type="button" class="btn btn-sm btn-secondary wrap ' + this.elementId + '-wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button>');
        let $maximizeBtn = $('<button data-editor="source" class="btn btn-sm btn-secondary ml-2 maximize ' + this.elementId + '-maximize">Maximize</button>');

        let $editorBtns = $('<div class="editor-buttons"></div>');
        $editorBtns
            .append($clearBtn)
            .append($copyBtn)
            .append($pasteBtn)
            .append($wrapBtn)
            .append($maximizeBtn);

        $editorBtns.prependTo($('#' + this.elementId).next());

        let _this = this;

        $wrapBtn.click(function() {
            if (!$(this).hasClass('active')) {
                _this.$codeMirror.setOption('lineWrapping', true);
            } else {
                _this.$codeMirror.setOption('lineWrapping', false);
            }
        });

        $clearBtn.click(function() {
            _this.$codeMirror.setValue('');
            _this.$codeMirror.save();
        });

        $copyBtn.tooltip(
            {
                placement: 'top',
                title: 'Copied!',
                trigger: 'click'
            }
        );

        new ClipboardJS('.' + this.elementId + '-copy', {
            text: function(trigger) {
                return _this.$codeMirror.getValue();
            }
        }).on('success', function (e) {
            setTimeout(function() {
                $copyBtn.tooltip('hide');
            }, 2000);
        });

        $pasteBtn.click(function(e) {
            navigator.clipboard.readText()
                .then(text => {
                    _this.$codeMirror.setValue(text);
                    _this.$codeMirror.save();
                })
                .catch(() => {
                    console.log('error')
                });
        });

        $maximizeBtn.click(function(e) {
            if ($(this).hasClass('maximize')) {

                $(this).text('Minimize');
                $(this).removeClass('maximize');
                $(this).addClass('minimize');

                _this.onMaximize();
            } else {
                $(this).text('Maximize');
                $(this).removeClass('minimize');
                $(this).addClass('maximize');

                _this.onMinimize();
            }

            _this.setEditorHeight();
        });

        this.setEditorHeight();

        $(window).resize(function() {
            _this.setEditorHeight();
        });
    }

    setEditorHeight() {
        let editorHeight = 0;
        if ($('.h1-row').is(':visible')) {
            editorHeight = $(window).height() - $('.h1-row').height() - $('.input-options').height() - 150;
        } else {
            editorHeight = $(window).height() - 120;
        }

        this.$codeMirror.setSize(null, editorHeight);
    }

    setTheme(theme) {
        this.$codeMirror.setOption('theme', this.getEditorTheme(theme));
    }

    setMode(mode) {
        this.$codeMirror.setOption('mode', mode);
    }

    getContent() {
        return this.$codeMirror.getValue().trim();
    }

    setContent(content) {
        this.$codeMirror.setValue(content);
        this.$codeMirror.save();
    }

    getEditorTheme(theme) {
        if (theme == 'light') {
            return this.EDITOR_LIGHT_THEME;
        } else {
            return this.EDITOR_DARK_THEME;
        }
    }

}