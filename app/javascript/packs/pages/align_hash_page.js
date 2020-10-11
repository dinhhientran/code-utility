import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import 'bootstrap-input-spinner/src/bootstrap-input-spinner.js'
import ToolPage from "./abstracts/tool_page";
import CodeEditor from "../code_editor";
import {ALIGN_HASH_SAMPLE} from "../samples/align_hash";

export default class AlignHashPage extends ToolPage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
        this.initInputs = this.initInputs.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.onShareLoad = this.onShareLoad.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.calculateEditorHeight = this.calculateEditorHeight.bind(this);

        this.beautifyUrl = window.gon.tool_url + '/beautify';
        this.shareUrl = window.gon.tool_url + '/share';
        this.forkUrl = window.gon.tool_url + '/fork';

        this.LANGUAGE = {
            php: {
                mode: 'text/x-php',
                sample: ALIGN_HASH_SAMPLE.php,
                comment: '//'
            },
            ruby: {
                mode: 'text/x-ruby',
                sample: ALIGN_HASH_SAMPLE.ruby,
                comment: '#'
            },
            javascript: {
                mode: 'text/typescript',
                sample: ALIGN_HASH_SAMPLE.javascript,
                comment: '//'
            },
            python: {
                mode: 'text/x-python',
                sample: ALIGN_HASH_SAMPLE.python,
                comment: '//'
            },
            perl: {
                mode: 'text/x-perl',
                sample: ALIGN_HASH_SAMPLE.perl,
                comment: '#'
            },
            groovy: {
                mode: 'text/x-groovy',
                sample: ALIGN_HASH_SAMPLE.groovy,
                comment: '//'
            }
        };
    }

    init() {
        super.init();

        this.$sourceColumn = $('#source-column');
        this.$targetColumn = $('#target-column');
        this.$buttonColumn = $('#button-column');

        this.$beautifyBtn = $("#beautify-btn");

        this.$languageDdl = $('#language');
        this.$indentSpaceInput = $('#indent-spaces');
        this.$valueAlignedCheckbox = $('#value-aligned-check');

        this.$headerTextRow = $('#h1-row');
        this.$inputOptionRow = $('#input-options-row');

        this.initInputs();
        this.initButtons();
        this.initShare();
        let _this = this;

        $(window).resize(function() {
            _this.setColumnWidth();
        });

        _this.setColumnWidth();

    }

    setColumnWidth() {
        if ($(window).width() > 768) {
            let editorColumnWidth = (100 - (this.$buttonColumn.outerWidth() / $('main').width()) * 100) / 2;
            let widthCss = {
                width: editorColumnWidth + '%',
                flex: '0 0 ' + editorColumnWidth + '%',
                maxWidth: editorColumnWidth + '%',
            };

            this.$sourceColumn.css(widthCss);
            this.$targetColumn.css(widthCss);
        } else {
            let widthCss = {
                width: '100%%',
                flex: '0 0 100%',
                maxWidth: '100%',
            };
            this.$sourceColumn.css(widthCss);
        }
    }

    initButtons() {
        let _this = this;
        this.$beautifyBtn.click(function() {
            _this.sendBeautifyRequest();
        });

        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                this.sendBeautifyRequest();
            }
        });
    }

    initInputs() {
        let _this = this;

        this.sourceEditor = new CodeEditor();
        this.sourceEditor.init({
            elementId: 'source-editor',
            theme: this.theme,
            onMaximize: this.onSourceEditorMaximize,
            onMinimize: this.onSourceEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        this.targetEditor = new CodeEditor();
        this.targetEditor.init({
            elementId: 'target-editor',
            theme: this.theme,
            onMaximize: this.onTargetEditorMaximize,
            onMinimize: this.onTargetEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        this.$languageDdl.select2({width: 200, minimumResultsForSearch: Infinity, placeholder: "Select a language"});
        this.$languageDdl.change(function() {
            let language = $(this).val();
            _this.sourceEditor.setMode(_this.LANGUAGE[language].mode);
            _this.targetEditor.setMode(_this.LANGUAGE[language].mode);

            let currentSourceContent = _this.sourceEditor.getContent();

            let isSample = false;
            for ( const [language, data] of Object.entries(_this.LANGUAGE)) {
                if (data.sample.trim() == currentSourceContent) {
                    isSample = true;
                    break;
                }
            }

            if (isSample || currentSourceContent == "") {
                _this.sourceEditor.setContent(_this.LANGUAGE[language].sample);
            }
        });

        this.$indentSpaceInput.inputSpinner({groupClass: 'indent-spaces'});

        this.$valueAlignedCheckbox.change(function() {
            if (_this.targetEditor.getContent() != "") {
                _this.sendBeautifyRequest();
            }
        });
    }

    sendBeautifyRequest() {
        let _this = this;

        let input = this.getInput();

        let hashContent = input.hash;
        hashContent = hashContent.replace(/\r\n/g, "\n");
        let filteredLines = [];

        hashContent.split('\n').forEach(function(line) {
            if (!line.trim().startsWith(_this.LANGUAGE[input.language]['comment'])) {
                filteredLines.push(line);
            }
        });

        if (hashContent != "") {
            _this.showLoadingOverlay();

            $.post(_this.beautifyUrl, {
                language: input.language,
                hash: filteredLines.join("\n"),
                indent: input.indent,
                valueAligned: input.valueAligned
            }, function (response) {
                _this.targetEditor.setContent(response.hash);

                _this.showShareButton();
            })
                .fail(function (response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                })
                .always(function () {
                    _this.closeLoadingOverlay();
                });
        }
    }

    getInput(){
        let language = this.$languageDdl.val();

        if (language == undefined || language == "") {
            return null;
        }

        let code = this.sourceEditor.getContent();

        if (code == "") {
            return null;
        }

        return {
            language: language,
            hash: code,
            indent: this.$indentSpaceInput.val(),
            valueAligned: this.$valueAlignedCheckbox.is(":checked") ? 1 : 0
        }
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
        this.targetEditor.setTheme(theme);
    }

    onShareLoad(input) {

        this.$languageDdl.val(input.language).trigger('change');

        this.$indentSpaceInput.val(input.indent);

        if (input.valueAligned == "1") {
            this.$valueAlignedCheckbox.attr('checked', 'checked');
        }
        this.sourceEditor.setContent(input.hash);

        this.sendBeautifyRequest();
    }

    onSourceEditorMaximize() {
        this.removeColumnWidthHeight();

        this.$targetColumn.hide();
        this.$sourceColumn
            .removeClass('col-md-5_5')
            .addClass('col-md-12');

        this.$buttonColumn.hide();
        this.$headerTextRow.hide();
        this.$inputOptionRow.hide();
        this.$footer.hide();
    }

    onSourceEditorMinimize() {
        this.removeColumnWidthHeight();

        this.$targetColumn.show();
        this.$sourceColumn
            .removeClass('col-md-12')
            .addClass('col-md-5_5');

        this.$buttonColumn.show();
        this.$headerTextRow.show();
        this.$inputOptionRow.show();
        this.$footer.show();
    }

    onTargetEditorMaximize() {
        this.removeColumnWidthHeight();

        this.$sourceColumn.hide();
        this.$targetColumn
            .removeClass('col-md-5_5')
            .addClass('col-md-12');

        this.$buttonColumn.hide();
        this.$headerTextRow.hide();
        this.$inputOptionRow.hide();
        this.$footer.hide();
    }

    onTargetEditorMinimize() {
        this.removeColumnWidthHeight();

        this.$sourceColumn.show();
        this.$targetColumn
            .removeClass('col-md-12')
            .addClass('col-md-5_5');

        this.$buttonColumn.show();
        this.$headerTextRow.show();
        this.$inputOptionRow.show();
        this.$footer.show();
    }

}