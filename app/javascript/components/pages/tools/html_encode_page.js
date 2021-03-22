import EncoderPage from "../abstracts/encoder_page";
import {ENCODE_STRING_SAMPLE} from "../../samples/encode_string";

export default class HtmlEncodePage extends EncoderPage {

    constructor(props) {
        super(props);

        this.sampleCode = ENCODE_STRING_SAMPLE.html.trim();
        this.sourceEditorMode = 'text/html';
        this.targetEditorMode = 'text/plain';

        this.targetEditorPlaceholder = 'Encoded HTML goes here...';
    }

    getSelectedLanguage() {

        return {
            name: 'Text',
            extensions: ['.txt']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.txt';
    }

    getShareNamePrefix() {
        return "HTML Encode";
    }
}