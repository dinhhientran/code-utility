import EncoderPage from "./abstracts/encoder_page";
import {ENCODE_STRING_SAMPLE} from "../samples/encode_string";

export default class Md5EncryptPage extends EncoderPage {

    constructor(props) {
        super(props);

        this.sampleCode = ENCODE_STRING_SAMPLE.string.trim();
        this.sourceEditorMode = 'text/plain';
        this.targetEditorMode = 'text/plain';

        this.encodeUrl = window.gon.api_url + '/encrypt';

        this.targetEditorPlaceholder = '';
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

    onAfterSendConvertRequest(response) {

        this.targetEditor.setContent(response.result);

        this.showShareButton();
    }

}