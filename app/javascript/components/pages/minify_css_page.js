import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import MinifierPage from "./abstracts/minifier_page";

export default class MinifyCssPage extends MinifierPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.css.trim();
        this.sourceEditorMode = 'text/css';
        this.targetEditorMode = 'text/css';
    }

    getSelectedLanguage() {

        return {
            name: 'CSS',
            extensions: ['.css']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.css';
    }

}