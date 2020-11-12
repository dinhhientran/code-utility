import {CONVERT_CODE_SAMPLE} from "../samples/convert_code";
import MinifierPage from "./abstracts/minifier_page";

export default class MinifySqlPage extends MinifierPage {

    constructor(props) {
        super(props);

        this.sampleCode = CONVERT_CODE_SAMPLE.sql.trim();
        this.sourceEditorMode = 'text/x-sql';
        this.targetEditorMode = 'text/x-sql';
    }

    getSelectedLanguage() {

        return {
            name: 'SQL',
            extensions: ['.sql']
        };
    }

    setDownloadFileNameAfterUpload(fileName) {
        this.uploadFileName = fileName + '.sql';
    }

}