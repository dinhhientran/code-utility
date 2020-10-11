import ConverterPage from "./converter_page";

export default class MinifierPage extends ConverterPage {

    constructor(props) {
        super(props);

        this.convertUrl = window.gon.tool_url + '/minify';
    }

    initButtons() {
        super.initButtons();

        this.$convertBtn.text('Minify');
    }

    initInputs() {
        super.initInputs();

        this.targetEditor.wrap();
    }

}