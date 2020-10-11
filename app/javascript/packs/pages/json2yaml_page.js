import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import ConverterPage from "./abstracts/converter_page";
import $ from "jquery";

export default class Json2yamlPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.json.trim();

        this.JSON = 'json';
        this.YAML = 'yaml';

        this.sourceEditorMode = 'application/json';
        this.targetEditorMode = 'text/x-yaml';

        this.$toJsonBtn = $('#to-json-btn');
    }

    initButtons() {
        super.initButtons();

        let _this = this;

        this.$toJsonBtn.click(function() {

            _this.sendConvertRequest(_this.getInput(_this.YAML, _this.JSON));
        });
    }

    onAfterSendConvertRequest(response) {

        if (response.language == 'json') {
            this.sourceEditor.setContent(response.code);
        } else {
            this.targetEditor.setContent(response.code);
        }

        this.showShareButton();
    }

    getSelectedLanguage() {
        return {
            name: 'YAML',
            extensions: ['.yaml']
        };
    }

    getInput(from, to){
        let code;

        if (from == undefined || to == undefined ) {
            from = 'json';
            to = 'yaml';
        }

        if (from == 'json') {
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

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.yaml';
    }

}