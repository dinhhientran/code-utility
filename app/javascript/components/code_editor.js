import $ from "jquery";
import 'javascript-detect-element-resize/detect-element-resize.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/jsx/jsx.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/perl/perl.js'
import 'codemirror/mode/go/go.js'
import 'codemirror/mode/groovy/groovy.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/htmlembedded/htmlembedded.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/haml/haml.js'
import 'codemirror/mode/slim/slim.js'
import 'codemirror/mode/pug/pug.js'
import 'codemirror/mode/sass/sass.js'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/lint/lint.js';
import 'codemirror-graphql/hint.js';
import 'codemirror-graphql/lint.js';
import 'codemirror-graphql/mode.js';
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/xml-fold.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/matchtags.js'
import 'codemirror/addon/display/placeholder.js'
import 'codemirror/addon/search/search.js'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
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
        this.mode = options.mode;
        this.onSetEditorHeight = options.onSetEditorHeight;
        this.onClear = options.onClear;
        this.calculateEditorHeight = options.calculateEditorHeight;
        this.defaultWrap = options.defaultWrap;

        CodeMirror.keyMap.default["Shift-Tab"] = "indentLess";
        CodeMirror.keyMap.default["Tab"] = "indentMore";

        this.$codeMirror = CodeMirror.fromTextArea(document.getElementById(this.elementId), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            matchTags: {bothTags: true},
            theme: this.getEditorTheme(this.theme),
            extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }, "Alt-F": "findPersistent"},
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            scrollbarStyle: "simple"
        });

        if (this.mode != null) {
            this.setMode(this.mode);
        }

        let $clearBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-clear"><i class="fas fa-eraser"></i> Clear</button>');
        let $pasteBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-paste"><i class="fas fa-paste"></i> Paste</button>');
        let $copyBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-copy"><i class="fas fa-copy"></i> Copy</button>');
        let $findBtn = $('<button class="btn btn-sm btn-secondary mr-2 ' + this.elementId + '-find"><i class="fas fa-search"></i> Find</button>');
        this.$wrapBtn = $('<button type="button" class="btn btn-sm btn-secondary wrap ' + this.elementId + '-wrap" data-toggle="button" aria-pressed="false" autocomplete="off"> Wrap <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style=" width: 12px;"><g class="fa-group"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-secondary" style=" fill: #fff !important;"></path><path fill="currentColor" d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z" class="fa-primary"></path></g></svg></button>');
        let $maximizeBtn = $('<button data-editor="source" class="btn btn-sm btn-secondary float-right ml-2 maximize ' + this.elementId + '-maximize"><i class="far fa-window-maximize"></i> Maximize</button>');


        this.$editorBtns = $('<div class="editor-buttons"></div>');
        this.$editorBtns
            .append($findBtn)
            .append($clearBtn)
            .append($copyBtn)
            .append($pasteBtn)
            .append($maximizeBtn)
            .append(this.$wrapBtn);

        this.$editorBtns.prependTo($('#' + this.elementId).next());

        let _this = this;

        $findBtn.click(function() {
            CodeMirror.commands.find(_this.$codeMirror);
        });

        this.$wrapBtn.click(function() {
            if (!$(this).hasClass('active')) {
                _this.$codeMirror.setOption('lineWrapping', true);
            } else {
                _this.$codeMirror.setOption('lineWrapping', false);
            }
        });

        $clearBtn.click(function() {
            _this.$codeMirror.setValue('');
            _this.$codeMirror.save();

            if (_this.onClear != undefined) {
                _this.onClear();
            }
        });

        $copyBtn.tooltip(
            {
                placement: 'top',
                title: 'Copied!',
                trigger: 'click',
                boundary: 'window'
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

                $(this).html(`<i class="far fa-window-minimize"></i> Minimize`);
                $(this).removeClass('maximize');
                $(this).addClass('minimize');

                if (_this.onMaximize != undefined) {
                    _this.onMaximize();
                }
            } else {
                $(this).html(`<i class="far fa-window-maximize"></i> Maximize`);
                $(this).removeClass('minimize');
                $(this).addClass('maximize');

                if (_this.onMinimize != undefined) {
                    _this.onMinimize();
                }
            }

            _this.setEditorHeight();
        });

        this.setEditorHeight();

        $(window).resize(function() {
            _this.setEditorHeight();
        });

        if (this.defaultWrap) {
            _this.$wrapBtn.click();
        }
        
    }

    setEditorHeight() {
        let editorHeight = 0;

        if (this.calculateEditorHeight != undefined) {
            editorHeight = this.calculateEditorHeight();
        }

        this.$codeMirror.setSize(null, editorHeight);

        if (this.onSetEditorHeight != null) {
            this.onSetEditorHeight(editorHeight);
        }
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

    wrap() {
        this.$codeMirror.setOption('lineWrapping', true);
        this.$wrapBtn.addClass('active');
    }

    unwrap() {
        this.$codeMirror.setOption('lineWrapping', false);
    }

    getEditorTheme(theme) {
        if (theme == 'light') {
            return this.EDITOR_LIGHT_THEME;
        } else {
            return this.EDITOR_DARK_THEME;
        }
    }

}