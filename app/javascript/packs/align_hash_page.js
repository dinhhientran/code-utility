import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import 'bootstrap-input-spinner/src/bootstrap-input-spinner.js'
import ToolPage from "./tool_page";
import CodeEditor from "./code_editor";
import {ALIGN_HASH_SAMPLE} from "./samples/align_hash";

export default class AlignHashPage extends ToolPage {

    constructor(props) {
        super(props);

        this.initInputs = this.initInputs.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.onShareLoad = this.onShareLoad.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.init = this.init.bind(this);

        this.beautifyUrl = '/align_hash/beautify';
        this.shareUrl = '/align_hash/share';
        this.forkUrl = '/align_hash/fork';

        this.LANGUAGE = {
            php: {
                mode: 'text/x-php',
                sample: ALIGN_HASH_SAMPLE.php,
                comment: '//'
            },
            ruby: {
                mode: 'text/x-ruby',
                sample: ALIGN_HASH_SAMPLE.ruby,
                comment: '#'
            },
            javascript: {
                mode: 'text/typescript',
                sample: ALIGN_HASH_SAMPLE.javascript,
                comment: '//'
            },
            python: {
                mode: 'text/x-python',
                sample: ALIGN_HASH_SAMPLE.python,
                comment: '//'
            },
            perl: {
                mode: 'text/x-perl',
                sample: ALIGN_HASH_SAMPLE.perl,
                comment: '#'
            },
            groovy: {
                mode: 'text/x-groovy',
                sample: ALIGN_HASH_SAMPLE.groovy,
                comment: '//'
            }
        };
    }

    init() {
        super.init();
        this.initInputs();
        this.initButtons();
        this.initShare();
    }

    initButtons() {
        let _this = this;
        $("#beautify-btn").click(function() {
            _this.sendBeautifyRequest();
        });

        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                this.sendBeautifyRequest();
            }
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

        this.targetEditor = new CodeEditor();
        this.targetEditor.init({
            elementId: 'target',
            theme: this.theme,
            onMaximize: this.onTargetEditorMaximize,
            onMinimize: this.onTargetEditorMinimize
        });

        $('#language').select2({width: 200, minimumResultsForSearch: Infinity, placeholder: "Select a language"});
        $('#language').change(function() {
            let language = $(this).val();
            _this.sourceEditor.setMode(_this.LANGUAGE[language].mode);
            _this.targetEditor.setMode(_this.LANGUAGE[language].mode);

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
        });

        $('#indent-spaces').inputSpinner({groupClass: 'indent-spaces'});

        $('#value-aligned-check').change(function() {
            if (_this.targetEditor.getContent() != "") {
                _this.sendBeautifyRequest();
            }
        });
    }

    sendBeautifyRequest() {
        let _this = this;

        let input = this.getInput();

        let hashContent = input.hash;
        hashContent = hashContent.replace(/\r\n/g, "\n");
        let filteredLines = [];

        hashContent.split('\n').forEach(function(line) {
            if (!line.trim().startsWith(_this.LANGUAGE[input.language]['comment'])) {
                filteredLines.push(line);
            }
        });

        if (hashContent != "") {
            _this.showLoadingOverlay();

            $.post(_this.beautifyUrl, {
                language: input.language,
                hash: filteredLines.join("\n"),
                indent: input.indent,
                valueAligned: input.valueAligned
            }, function (response) {
                _this.targetEditor.setContent(response.hash);

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

        return {
            language: language,
            hash: code,
            indent: $('.indent-spaces .form-control-sm').val(),
            valueAligned: $('#value-aligned-check').is(":checked") ? 1 : 0
        }
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
        this.targetEditor.setTheme(theme);
    }

    onShareLoad(input) {

        $('#language').val(input.language).trigger('change');

        $('#indent-spaces').val(input.indent);
        if (input.valueAligned == "1") {
            $('#value-aligned-check').attr('checked', 'checked');
        }
        this.sourceEditor.setContent(input.hash);

        this.sendBeautifyRequest();
    }

    onSourceEditorMaximize() {
        $('.target-column').hide();
        $('.source-column').removeClass('col-md-5_5');
        $('.source-column').addClass('col-md-12');

        $('.button-column').hide();
        $('.h1-row').hide();
        $('.input-options').hide();
        $('footer').hide();
    }

    onSourceEditorMinimize() {
        $('.target-column').show();
        $('.source-column').removeClass('col-md-12');
        $('.source-column').addClass('col-md-5_5');

        $('.button-column').show();
        $('.h1-row').show();
        $('.input-options').show();
        $('footer').show();
    }

    onTargetEditorMaximize() {
        $('.source-column').hide();
        $('.target-column').removeClass('col-md-5_5');
        $('.target-column').addClass('col-md-12');

        $('.button-column').hide();
        $('.h1-row').hide();
        $('.input-options').hide();
        $('footer').hide();
    }

    onTargetEditorMinimize() {
        $('.source-column').show();
        $('.target-column').removeClass('col-md-12');
        $('.target-column').addClass('col-md-5_5');

        $('.button-column').show();
        $('.h1-row').show();
        $('.input-options').show();
        $('footer').show();
    }

}