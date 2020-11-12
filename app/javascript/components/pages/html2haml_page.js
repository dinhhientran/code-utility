import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import ConverterPage from "./abstracts/converter_page";

export default class Html2HamlPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.html2haml.trim();
        this.sourceEditorMode = 'application/x-erb';
        this.targetEditorMode = 'text/x-haml';
    }

    getSelectedLanguage() {

        return {
            name: 'HAML',
            extensions: ['.html.haml']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName;

        if (this.uploadFileName.endsWith('html') || this.uploadFileName.endsWith('htm')) {
            this.uploadFileName += '.haml';
        } else {
            this.uploadFileName += '.html.haml';
        }
    }

}