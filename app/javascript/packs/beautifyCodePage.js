import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import CodeEditor from "./codeEditor";
import ToolPage from "./toolPage";

export default class BeautifyCodePage extends ToolPage {

    constructor(props) {
        super(props);

        this.initInputs = this.initInputs.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.init = this.init.bind(this);

        this.beautifyUrl = '/beautify_code/beautify';
        this.shareUrl = '/beautify_code/share';
        this.forkUrl = '/beautify_code/fork';

        this.LANGUAGE = {
            php: {
                name: 'PHP',
                mode: 'text/x-php',
                sample:  `<?php
$servername="localhost";
$username="username";
$password="password";
$dbname="myDB";

function test(){echo "This is a test function.";}

// Create connection
$conn=new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error){die("Connection failed: ".$conn->connect_error);} 

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
 // output data of each row
while($row = $result->fetch_assoc()) {echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";}} else {echo "0 results";}
$conn->close();
?>`,
                extensions: ['.php'],
                initFnc: this.initPhp
            },
            ruby: {
                name: 'Ruby',
                mode: 'text/x-ruby',
                sample: '',
                extensions: ['.rb'],
                initFnc: this.initRuby
            },
            javascript: {
                mode: 'text/typescript',
                sample: '',
            },
            python: {
                mode: 'text/x-python',
                sample: '',
            },
            perl: {
                mode: 'text/x-perl',
                sample: ''
            },
            groovy: {
                mode: 'text/x-groovy',
                sample: ''
            }
        };
    }

    init() {
        super.init();
        this.initInputs();
        this.initButtons();
        this.initUploadDownloadButtons();
        this.initShare();

        let _this = this;
        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                _this.sendBeautifyRequest();
            }
        });
    }

    initPhp(rules) {
        $('#php_options > .option-column').hide();
        $('#php_options').show();
        $('#rules').select2({width: 270, multiple: true});

        $('#php_rule_description select').select2({width: 120, minimumResultsForSearch: Infinity});
        $('#php_rule_description select').change(function() {
            $('.rule-content > div').hide();
            $('.rule-content .' + $(this).val() + '-rule').removeClass('d-none').show();
        });

        if (rules != undefined) {
            $('#php_rule_description select').select2('val', rules);
        }
    }

    initRuby() {

    }

    initButtons() {

        let _this = this;
        $("#beautify-btn").click(function() {
            _this.sendBeautifyRequest();
        });

    }

    initInputs() {
        let _this = this;

        this.sourceEditor = new CodeEditor();
        this.sourceEditor.init({
            elementId: 'source',
            theme: this.theme,
            onMaximize: this.onSourceEditorMaximize,
            onMinimize: this.onSourceEditorMinimize
        });

        $('#language').select2({width: 200, minimumResultsForSearch: Infinity, placeholder: "Select a language"});
        $('#language').change(function() {
            let language = $(this).val();

            $('.h1-row h1').text('Beautify ' + _this.LANGUAGE[language].name);

            $('.option-column > div').hide();

            _this.sourceEditor.setMode(_this.LANGUAGE[language].mode);

            let currentSourceContent = _this.sourceEditor.getContent();

            let isSample = false;
            for ( const [language, data] of Object.entries(_this.LANGUAGE)) {
                if (data.sample.trim() == currentSourceContent) {
                    isSample = true;
                    break;
                }
            }

            if (isSample || currentSourceContent == "") {
                _this.sourceEditor.setContent(_this.LANGUAGE[language].sample);
            }

            let initLanguage = _this.LANGUAGE[$(this).val()].initFnc;
            initLanguage();
        });
    }

    sendBeautifyRequest() {
        let _this = this;

        let input = this.getInput();

        if (input != null) {
            this.showLoadingOverlay();

            $.post(this.beautifyUrl, {
                language: input.language,
                code: input.code,
                rules: input.rules,
            }, function (response) {
                _this.sourceEditor.setContent(response.code);

                _this.afterSendBeautifyRequest();
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

    getInput(){
        let language = $('#language').val();

        if (language == undefined || language == "") {
            return null;
        }

        let code = this.sourceEditor.getContent();

        if (code == "") {
            return null;
        }

        let rules = $("#rules").select2('val');

        return {
            language: language,
            code: code,
            rules: rules
        }
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
    }

    onShareLoad(input) {
        $('#language').val(input.language).trigger('change');

        this.sourceEditor.setContent(input.code);

        if (input.language == 'php') {
            this.initPhp(input.rules);
        }
    }

    onUploadSuccess(response) {
        this.sourceEditor.setContent(response.content);
        for ( const [language, data] of Object.entries(this.LANGUAGE)) {
            if (data.extensions.indexOf(response.extension) != -1) {
                $('#language').val(language).trigger('change');
                break;
            }
        }
    }

    onSourceEditorMaximize() {
        $('.button-column').hide();

        $('.source-column').removeClass('col-md-10');
        $('.source-column').addClass('col-md-12');

        $('.h1-row').hide();
        $('.input-options').hide();
        $('footer').hide();
    }

    onSourceEditorMinimize() {
        $('.button-column').show();

        $('.source-column').removeClass('col-md-12');
        $('.source-column').addClass('col-md-10');

        $('.h1-row').show();
        $('.input-options').show();
        $('footer').show();
    }

}