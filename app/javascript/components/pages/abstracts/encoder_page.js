import ConverterPage from "./converter_page";
import Toastr from "toastr/build/toastr.min.js";
import $ from "jquery";

export default class EncoderPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.ENCODE = 'encode';
        this.DECODE = 'decode';

        this.encodeUrl = window.gon.api_url + '/encode';
        this.decodeUrl = window.gon.api_url + '/decode';

        this.sourceEditorPlaceholder = 'Text goes here...';
        this.targetEditorPlaceholder = 'Text goes here...';
    }

    initButtons() {
        let _this = this;

        super.initButtons();

        this.$decodeBtn = $('#decode-btn');

        this.$decodeBtn.click(function() {
            let input = _this.getInput('decode');
            _this.sendConvertRequest(input);
        });
    }

    sendConvertRequest(input) {
        let _this = this;

        input = input == undefined ? this.getInput() : input;

        let string = input.string;

        if (string != "") {
            _this.showLoadingOverlay();

            $.post(input.action == _this.ENCODE ? _this.encodeUrl : _this.decodeUrl, {
                input: input,
            }, function (response) {

                _this.onAfterSendConvertRequest(response);
            })
                .fail(function (response) {
                    response = response.responseJSON;
                    if (response && response.error) {
                        Toastr.error(response.error, "Error");
                    }
                })
                .always(function () {
                    _this.closeLoadingOverlay();
                });
        }
    }

    onAfterSendConvertRequest(response) {

        if (response.action == this.ENCODE) {
            this.targetEditor.setContent(response.result);
        } else {
            this.sourceEditor.setContent(response.result);
        }

        this.showShareButton();
    }

    onShareLoad(input) {
        super.onShareLoad();

        if (input.action == this.ENCODE) {
            this.sourceEditor.setContent(input.string);
        } else {
            this.targetEditor.setContent(input.string);
        }

        this.sendConvertRequest(input);
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