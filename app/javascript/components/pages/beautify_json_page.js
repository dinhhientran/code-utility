import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import 'bootstrap-input-spinner/src/bootstrap-input-spinner.js'
import JSONEditor from "jsoneditor/dist/jsoneditor-minimalist.min.js";
import 'jsoneditor/dist/jsoneditor.min.css'
import ToolPage from "./abstracts/tool_page";
import CodeEditor from "../code_editor";
import {BEAUTIFY_CODE_SAMPLE} from "../samples/beautify_code";
import Cookies from "js-cookie";

export default class BeautifyJsonPage extends ToolPage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
        this.initInputs = this.initInputs.bind(this);
        this.initJsonTree = this.initJsonTree.bind(this);
        this.updateJsonTree = this.updateJsonTree.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.onIndentChange = this.onIndentChange.bind(this);
        this.onSetEditorHeight = this.onSetEditorHeight.bind(this);
        this.onShareLoad = this.onShareLoad.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onSourceEditorMaximize = this.onSourceEditorMaximize.bind(this);
        this.onSourceEditorMinimize = this.onSourceEditorMinimize.bind(this);
        this.onTargetEditorMaximize = this.onTargetEditorMaximize.bind(this);
        this.onTargetEditorMinimize = this.onTargetEditorMinimize.bind(this);
        this.calculateEditorHeight = this.calculateEditorHeight.bind(this);

        this.beautifyUrl = window.gon.api_url + '/beautify';
        this.shareUrl = window.gon.api_url + '/share';
        this.forkUrl = window.gon.api_url + '/fork';
    }

    init() {
        super.init();

        this.$buttonColumn = $('#button-column');
        this.$sourceColumn = $('#source-column');
        this.$targetColumn = $('#target-column');


        this.$beautifyBtn = $('#beautify-btn');
        this.$minifyBtn = $('#minify-btn');
        this.$exampleToggle = $('#example-toggle');
        this.$sourceViewBtn = $('#source-view-btn');
        this.$treeViewBtn = $('#tree-view-btn');
        this.$jsonViewContainers = $('.json-view');
        this.$sourceViewContainer = $('#source-view');
        this.$indentInputContainer = $('#indent-group');
        this.jsonEditorContainerName = 'json-editor';
        this.$jsonEditorContainer = $('#' + this.jsonEditorContainerName);
        this.$indentInput = $('#indent-spaces');

        this.$headerTextRow = $('#h1-row');
        this.$inputOptionRow = $('#input-options');
        this.$main = $('main');
        this.$footer = $('footer');


        this.initInputs();
        this.initButtons();
        this.initShare();

        this.jsonViewMode = 'source';

        let _this = this;

        $(window).resize(function() {
            _this.setColumnWidth();
        });

        _this.setColumnWidth();

    }

    setColumnWidth() {
        if ($(window).width() > 768) {
            let editorColumnWidth = (100 - (this.$buttonColumn.outerWidth() / this.$main.width()) * 100) / 2;
            let widthCss = {
                width: editorColumnWidth + '%',
                flex: '0 0 ' + editorColumnWidth + '%',
                maxWidth: editorColumnWidth + '%',
            };

            this.$sourceColumn.css(widthCss);
            this.$targetColumn.css(widthCss);
        } else {
            let widthCss = {
                width: '',
                flex: '',
                maxWidth: '',
            };
            this.$sourceColumn.css(widthCss);
            this.$targetColumn.css(widthCss);
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

        this.$exampleToggle.click(function() {
            let showSampleCode = $(this).is(':checked');

            _this.showSampleCode = showSampleCode;

            _this.setCookie(window.gon.tool + _this.cookieSampleCodeSuffix, showSampleCode);

            let currentCode = _this.sourceEditor.getContent();

            if (!showSampleCode) {
                if (currentCode == BEAUTIFY_CODE_SAMPLE.json) {
                    _this.sourceEditor.setContent('');
                }
            } else if (currentCode == "") {
                _this.sourceEditor.setContent(BEAUTIFY_CODE_SAMPLE.json);
            }
        });

        this.$sourceViewBtn.click(function() {
            if (_this.jsonViewMode == 'source')
                return;

            $(this).addClass('btn-success').removeClass('btn-secondary');

            _this.$treeViewBtn.addClass('btn-secondary').removeClass('btn-success');

            _this.jsonViewMode = 'source';

            _this.$jsonViewContainers.hide();
            _this.$sourceViewContainer.show();
            _this.$indentInputContainer.show();

            let json = _this.jsonEditor.getText();

            _this.targetEditor.setContent(json);

            _this.sendBeautifyRequest({json: json, indent: _this.$indentInput.val()});
        });

        this.$treeViewBtn.click(function() {
            if (_this.jsonViewMode == 'tree')
                return;

            $(this).addClass('btn-success').removeClass('btn-secondary');

            _this.$sourceViewBtn.addClass('btn-secondary').removeClass('btn-success');

            _this.jsonViewMode = 'tree';

            _this.$jsonViewContainers.show();
            _this.$sourceViewContainer.hide();
            _this.$indentInputContainer.hide();

            if (_this.jsonEditor == null) {
                _this.initJsonTree();
            } else {
                _this.updateJsonTree();
            }
        });

        this.$minifyBtn.click(function() {
            let targetJson = _this.targetEditor.getContent();
            if (targetJson != "") {
                try {
                    _this.sourceEditor.setContent(JSON.stringify(JSON.parse(targetJson)));
                    _this.$minifyBtn.tooltip('enable');

                    setTimeout(function () {
                        _this.$minifyBtn.tooltip('hide');
                    }, 2000);
                } catch (e) {
                    _this.sourceEditor.setContent(e.toString());
                    _this.$minifyBtn.tooltip('disable');
                }
            } else {
                _this.$minifyBtn.tooltip('disable');
            }
        }).tooltip(
            {
                placement: 'top',
                title: 'Done',
                trigger: 'click',
                delay: {show: 300, hide: 0}
            }
        );

        this.initDownloadButton();
    }

    initJsonTree() {
        let targetCode = this.targetEditor.getContent();
        let json;
        try {
            json = targetCode != "" ? JSON.parse(targetCode) : {};
        } catch (e) {
            console.log(e);
            json = {};
        }

        let $container = document.getElementById(this.jsonEditorContainerName);
        let options = {
            mode: 'tree',
            onError: function (err) {
                console.log(err.toString())
            }

        };
        this.jsonEditor = new JSONEditor($container, options, json);
        this.jsonEditor.expandAll();
    }

    updateJsonTree() {
        try {
            let targetJson = this.targetEditor.getContent();
            this.jsonEditor.update(targetJson != "" ? JSON.parse(targetJson) : {});
            this.jsonEditor.expandAll();
        } catch (e) {
            console.log(e);
        }
    }

    initInputs() {
        let _this = this;

        this.sourceEditor = new CodeEditor();
        this.sourceEditor.init({
            elementId: 'source-editor',
            theme: this.theme,
            mode: 'application/json',
            defaultWrap: true,
            onMaximize: this.onSourceEditorMaximize,
            onMinimize: this.onSourceEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        this.targetEditor = new CodeEditor();
        this.targetEditor.init({
            elementId: 'target-editor',
            mode: 'application/json',
            theme: this.theme,
            onMaximize: this.onTargetEditorMaximize,
            onMinimize: this.onTargetEditorMinimize,
            onClear: this.onTargetEditorClear,
            onSetEditorHeight: this.onSetEditorHeight,
            calculateEditorHeight: this.calculateEditorHeight
        });

        this.$indentInput.inputSpinner({groupClass: 'indent-spaces'});

        this.$indentInput.on("input", function () {
            _this.onIndentChange();
        });

        this.$indentInput.on("change", function () {
            _this.onIndentChange();
        });

        if (_this.showSampleCode) {
            this.sourceEditor.setContent(BEAUTIFY_CODE_SAMPLE.json);
        }

    }

    sendBeautifyRequest(input) {
        let _this = this;

        input = input == undefined ? this.getInput() : input;

        let json = input.json;
        json = json.replace(/\r\n/g, "\n");
        input.json = json;

        if (json != "") {
            _this.showLoadingOverlay();

            $.post(_this.beautifyUrl, {
                input: input,
            }, function (response) {
                _this.targetEditor.setContent(response.json);

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

    showShareButton() {
        super.showShareButton();

        if (this.jsonEditor == null) {
            this.initJsonTree();
        } else {
            this.updateJsonTree();
        }
    }

    getInput(){
        let json = this.sourceEditor.getContent();

        if (json == "") {
            return null;
        }

        return {
            json: json,
            indent: this.$indentInput.val()
        }
    }

    getSelectedLanguage() {

        return {
            name: 'JSON',
            extensions: ['.json']
        };
    }

    getCodeToDownload() {
        return this.targetEditor.getContent();
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
        this.targetEditor.setTheme(theme);
    }

    onShareLoad(input) {
        super.onShareLoad();

        this.sourceEditor.setContent(input.json);

        this.$indentInput.val(input.indent);

        this.sendBeautifyRequest();
    }

    onSetEditorHeight(height) {
        this.$jsonEditorContainer.css({'height': height});
    }

    onIndentChange() {
        let json = this.targetEditor.getContent();
        if (json != "") {
            this.sendBeautifyRequest({json: json, indent: this.$indentInput.val()});
        }
    }

    onTargetEditorClear() {
        if (this.jsonEditor != null) {
            this.jsonEditor.update({});
        }
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

        this.$buttonColumn
            .addClass('d-flex')
            .hide();
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

        this.$buttonColumn
            .removeClass('d-flex')
            .show();
        this.$headerTextRow.show();
        this.$inputOptionRow.show();
        this.$footer.show();
    }

}