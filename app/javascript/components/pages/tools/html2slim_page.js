import {CONVERT_CODE_SAMPLE} from "../../samples/convert_code";
import ConverterPage from "../abstracts/converter_page";

export default class Html2SlimPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.html2haml.trim();
        this.sourceEditorMode = 'application/x-erb';
        this.targetEditorMode = 'application/x-slim';
    }

    getSelectedLanguage() {

        return {
            name: 'Slim',
            extensions: ['.html.slim']
        };
    }

    getShareNamePrefix() {
        return "Convert HTML to Slim";
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName;

        if (this.uploadFileName.endsWith('html') || this.uploadFileName.endsWith('htm')) {
            this.uploadFileName += '.slim';
        } else {
            this.uploadFileName += '.html.slim';
        }
    }

}