import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import ConverterPage from "./abstracts/converter_page";

export default class Html2PugPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.html.trim();
        this.sourceEditorMode = 'text/html';
        this.targetEditorMode = 'text/x-pug';
    }

    getSelectedLanguage() {

        return {
            name: 'PUG',
            extensions: ['.pug']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.pug';
    }

}