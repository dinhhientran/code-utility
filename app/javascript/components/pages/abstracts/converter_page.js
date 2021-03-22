import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import ToolPage from "./tool_page";
import CodeEditor from "../../code_editor";
import Cookies from "js-cookie";

export default class ConverterPage extends ToolPage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
        this.initInputs = this.initInputs.bind(this);
        this.sendConvertRequest = this.sendConvertRequest.bind(this);
        this.onShareLoad = this.onShareLoad.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onSourceEditorMaximize = this.onSourceEditorMaximize.bind(this);
        this.onSourceEditorMinimize = this.onSourceEditorMinimize.bind(this);
        this.onTargetEditorMaximize = this.onTargetEditorMaximize.bind(this);
        this.onTargetEditorMinimize = this.onTargetEditorMinimize.bind(this);
        this.calculateEditorHeight = this.calculateEditorHeight.bind(this);
        this.setDownloadFileNameAfterUpload = this.setDownloadFileNameAfterUpload.bind(this);
        this.onAfterSendConvertRequest = this.onAfterSendConvertRequest.bind(this);

        this.convertUrl = window.gon.api_url + '/convert';
        this.shareUrl = window.gon.api_url + '/share';
        this.forkUrl = window.gon.api_url + '/fork';

        this.sourceEditorPlaceholder = 'Code goes here...';
        this.targetEditorPlaceholder = '';

    }

    init() {
        super.init();

        this.$buttonColumn = $('#button-column');
        this.$sourceColumn = $('#source-column');
        this.$targetColumn = $('#target-column');


        this.$convertBtn = $('#convert-btn');
        this.$exampleToggle = $('#example-toggle');

        this.$headerTextRow = $('#h1-row');
        this.$inputOptionRow = $('#input-options');
        this.$main = $('main');
        this.$footer = $('footer');

        this.$sourceEditor = $('#source-editor');
        this.$targetEditor = $('#target-editor');


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
        this.$convertBtn.click(function() {
            _this.sendConvertRequest();
        });

        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                this.sendConvertRequest();
            }
        });

        this.$exampleToggle.click(function() {
            let showSampleCode = $(this).is(':checked');

            _this.showSampleCode = showSampleCode;

            _this.setCookie(window.gon.tool + _this.cookieSampleCodeSuffix, showSampleCode);

            let currentCode = _this.sourceEditor.getContent();

            if (currentCode == _this.sampleCode) {
                _this.sourceEditor.setContent('');
            } else if (currentCode == "") {
                _this.sourceEditor.setContent(_this.sampleCode);
            }
        });

        this.initUploadDownloadButtons();
    }

    initInputs() {
        let _this = this;

        this.$sourceEditor.attr('placeholder', this.sourceEditorPlaceholder);
        this.$targetEditor.attr('placeholder', this.targetEditorPlaceholder);

        this.sourceEditor = new CodeEditor();
        this.sourceEditor.init({
            elementId: 'source-editor',
            theme: this.theme,
            mode: this.sourceEditorMode,
            defaultWrap: true,
            onMaximize: this.onSourceEditorMaximize,
            onMinimize: this.onSourceEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        this.targetEditor = new CodeEditor();
        this.targetEditor.init({
            elementId: 'target-editor',
            mode: this.targetEditorMode,
            theme: this.theme,
            onMaximize: this.onTargetEditorMaximize,
            onMinimize: this.onTargetEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        if (_this.showSampleCode) {
            this.sourceEditor.setContent(this.sampleCode);
        }

    }

    sendConvertRequest(input) {
        let _this = this;

        input = input == undefined ? this.getInput() : input;

        let code = input.code;

        if (code != "") {
            _this.showLoadingOverlay();

            $.ajax({
                type: 'POST',
                url: _this.convertUrl,
                crossDomain: true,
                data: {
                    input: input,
                },
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json',
                success: function(response, textStatus, jqXHR) {
                    _this.onAfterSendConvertRequest(response);

                    _this.showShareButton();
                },
                error: function (response, textStatus, errorThrown) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                },
                complete: function () {
                    _this.closeLoadingOverlay();
                }
            });
        }
    }

    onAfterSendConvertRequest(response) {
        this.targetEditor.setContent(response.code);

        this.showShareButton();
    }

    showShareButton() {
        super.showShareButton();

    }

    getInput(){
        let code = this.sourceEditor.getContent();

        if (code == "") {
            return null;
        }

        return {
            code: code,
        }
    }

    getSelectedLanguage() {

        return {

        };
    }

    getCodeToDownload() {
        return this.targetEditor.getContent();
    }

    onUploadSuccess(response) {
        this.sourceEditor.setContent(response.content);

        this.setDownloadFileNameAfterUpload(response.fileBaseName);
    }

    setDownloadFileNameAfterUpload() {
        return null;
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
        this.targetEditor.setTheme(theme);
    }

    onShareLoad(input) {
        super.onShareLoad();

        this.sourceEditor.setContent(input.code);

        this.sendConvertRequest();
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

        this.setColumnWidth();
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

        this.setColumnWidth();
    }

}