import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import MinifierPage from "./abstracts/minifier_page";

export default class MinifyHtmlPage extends MinifierPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.html.trim();
        this.sourceEditorMode = 'text/html';
        this.targetEditorMode = 'text/html';
    }

    getSelectedLanguage() {

        return {
            name: 'HTML',
            extensions: ['.html']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.html';
    }

}