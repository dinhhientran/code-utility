import EncoderPage from "../abstracts/encoder_page";
import {ENCODE_STRING_SAMPLE} from "../../samples/encode_string";

export default class HexEncodePage extends EncoderPage {

    constructor(props) {
        super(props);

        this.sampleCode = ENCODE_STRING_SAMPLE.string.trim();
        this.sourceEditorMode = 'text/plain';
        this.targetEditorMode = 'text/plain';

        this.targetEditorPlaceholder = 'Encoded string goes here...';
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
        return "Hex Encode";
    }
}