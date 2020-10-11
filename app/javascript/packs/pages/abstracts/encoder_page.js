import ConverterPage from "./converter_page";
import $ from "jquery";

export default class EncoderPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.ENCODE = 'encode';
        this.DECODE = 'decode';

        this.encodeUrl = window.gon.tool_url + '/encode';
        this.decodeUrl = window.gon.tool_url + '/decode';

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

            $.post(input.type == _this.ENCODE ? _this.encodeUrl : _this.decodeUrl, {
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

        if (response.type == this.ENCODE) {
            this.targetEditor.setContent(response.result);
        } else {
            this.sourceEditor.setContent(response.result);
        }

        this.showShareButton();
    }

    onShareLoad(input) {

        if (input.type == this.ENCODE) {
            this.sourceEditor.setContent(input.string);
        } else {
            this.targetEditor.setContent(input.string);
        }

        this.sendConvertRequest(input);
    }

    getInput(type){
        let input;

        if (type == undefined) {
            input = this.sourceEditor.getContent();
        } else {
            input = this.targetEditor.getContent();
        }

        return {
            string: input,
            type: type != undefined ? type : 'encode'
        }
    }

}