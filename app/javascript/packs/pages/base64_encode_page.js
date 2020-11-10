import EncoderPage from "./abstracts/encoder_page";
import {ENCODE_STRING_SAMPLE} from "../samples/encode_string";
import $ from "jquery";

export default class Base64EncodePage extends EncoderPage {

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

    getInput(action){
        let input;

        if (action == undefined) {
            input = this.sourceEditor.getContent();
        } else {
            input = this.targetEditor.getContent();
        }

        return {
            string: input,
            action: action != undefined ? action : 'encode'
        }
    }

}