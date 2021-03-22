import {CONVERT_CODE_SAMPLE} from "../../samples/convert_code";
import MinifierPage from "../abstracts/minifier_page";

export default class MinifyJsonPage extends MinifierPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.json.trim();
        this.sourceEditorMode = 'application/json';
        this.targetEditorMode = 'application/json';
    }

    getSelectedLanguage() {

        return {
            name: 'JSON',
            extensions: ['.json']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.json';
    }

    getShareNamePrefix() {
        return "Minify JSON";
    }

}