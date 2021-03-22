import {CONVERT_CODE_SAMPLE} from "../../samples/convert_code";
import ConverterPage from "../abstracts/converter_page";
import $ from "jquery";

export default class Css2scssPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.css.trim();

        this.CSS_EDITOR_MODE = 'text/css';
        this.SCSS_EDITOR_MODE = 'text/x-scss';
        this.SASS_EDITOR_MODE = 'text/x-sass';

        this.sourceEditorMode = this.CSS_EDITOR_MODE;
        this.targetEditorMode = this.SCSS_EDITOR_MODE;

        this.CSS = 'css';
        this.SCSS = 'scss';
        this.SASS = 'sass';

        this.$scssViewBtn = $('#scss-view-btn');
        this.$sassViewBtn = $('#sass-view-btn');
        this.$toCssBtn = $('#to-css-btn');

        this.targetViewMode = this.SCSS;
    }

    initButtons() {
        super.initButtons();

        let _this = this;

        this.$scssViewBtn.click(function() {
            if (_this.targetViewMode == _this.SCSS)
                return;

            $(this).addClass('btn-success').removeClass('btn-secondary');

            _this.$sassViewBtn.addClass('btn-secondary').removeClass('btn-success');

            _this.targetViewMode = _this.SCSS;

            _this.targetEditor.setMode(_this.SCSS_EDITOR_MODE);

            _this.sendConvertRequest(_this.getInput(_this.SASS, _this.SCSS));
        });

        this.$sassViewBtn.click(function() {
            if (_this.targetViewMode == _this.SASS)
                return;

            $(this).addClass('btn-success').removeClass('btn-secondary');

            _this.$scssViewBtn.addClass('btn-secondary').removeClass('btn-success');

            _this.targetViewMode = _this.SASS;

            _this.targetEditor.setMode(_this.SASS_EDITOR_MODE);

            _this.sendConvertRequest(_this.getInput(_this.SCSS, _this.SASS));
        });

        this.$toCssBtn.click(function() {
            let from = _this.targetViewMode == _this.SASS ? _this.SASS : _this.SCSS;

            _this.sendConvertRequest(_this.getInput(from, _this.CSS));
        });
    }

    onAfterSendConvertRequest(response) {

        if (response.language == 'css') {
            this.sourceEditor.setContent(response.code);
        } else {
            this.targetEditor.setContent(response.code);
        }

        this.showShareButton();
    }

    getSelectedLanguage() {

        if (this.targetViewMode == this.SASS) {
            return {
                name: 'SASS',
                extensions: ['.sass']
            };
        } else {
            return {
                name: 'SCSS',
                extensions: ['.scss']
            };
        }
    }

    getInput(from, to){
        let code;

        if (from == undefined || to == undefined ) {
            from = 'css';
            to = this.targetViewMode;
        }

        if (from == 'css') {
            code = this.sourceEditor.getContent();
        } else {
            code = this.targetEditor.getContent();
        }

        return {
            code: code,
            from: from,
            to: to
        }
    }

    getShareNamePrefix() {
        return "Convert CSS to SCSS";
    }

    setDownloadFileNameAfterUpload(fileName) {
        if (this.targetViewMode == this.SASS) {
            this.uploadFileName = fileName + '.scss';
        } else {
            this.uploadFileName = fileName + '.sass';
        }
    }

}