import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import MinifierPage from "./abstracts/minifier_page";

export default class MinifyJavascriptPage extends MinifierPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.javascript.trim();
        this.sourceEditorMode = 'text/typescript';
        this.targetEditorMode = 'text/typescript';
    }

    getSelectedLanguage() {

        return {
            name: 'JavaScript',
            extensions: ['.js']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.js';
    }

}