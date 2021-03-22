import EncoderPage from "../abstracts/encoder_page";
import {ENCODE_STRING_SAMPLE} from "../../samples/encode_string";
import $ from "jquery";

export default class ShaEncryptPage extends EncoderPage {

    constructor(props) {
        super(props);

        this.sampleCode = ENCODE_STRING_SAMPLE.string.trim();
        this.sourceEditorMode = 'text/plain';
        this.targetEditorMode = 'text/plain';

        this.encodeUrl = window.gon.api_url + '/encrypt';

        this.targetEditorPlaceholder = '';
    }

    initInputs() {
        super.initInputs();

        this.$typeDdl = $('#type');
        this.$typeDdl.select2({width: 200, placeholder: "Select SHA type", minimumResultsForSearch: Infinity});
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

    getInput(action){
        let input;

        if (action == undefined) {
            input = this.sourceEditor.getContent();
        } else {
            input = this.targetEditor.getContent();
        }

            let type = this.$typeDdl.val();

        return {
            string: input,
            type: type,
            action: action != undefined ? action : 'encode'
        }
    }

    getShareNamePrefix() {
        return "SHA Encrypt";
    }

}