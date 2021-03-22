import {CONVERT_CODE_SAMPLE} from "../../samples/convert_code";
import ConverterPage from "../abstracts/converter_page";

export default class Html2JsxPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.html2jsx.trim();
        this.sourceEditorMode = 'text/html';
        this.targetEditorMode = 'text/jsx';
    }

    getSelectedLanguage() {

        return {
            name: 'JSX',
            extensions: ['.jsx']
        };
    }

    getShareNamePrefix() {
        return "Convert HTML to JSX";
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.jsx';
    }

}