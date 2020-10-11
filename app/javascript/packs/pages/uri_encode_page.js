import EncoderPage from "./abstracts/encoder_page";
import {ENCODE_STRING__SAMPLE} from "../samples/encode_string";

export default class UriEncodePage extends EncoderPage {

    constructor(props) {
        super(props);

        this.sampleCode = ENCODE_STRING__SAMPLE.uri.trim();
        this.sourceEditorMode = 'text/plain';
        this.targetEditorMode = 'text/plain';

        this.targetEditorPlaceholder = 'Encoded URI goes here...';
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

}