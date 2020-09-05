import ConversionPage from "./conversionPage.js"
import $ from "jquery";
import 'toastr/build/toastr.min.css'
import Toastr from "toastr/build/toastr.min.js"
import 'select2/dist/css/select2.css'
import 'select2'
import 'bootstrap-input-spinner/src/bootstrap-input-spinner.js'
import ClipboardJS from 'clipboard/dist/clipboard.min.js'

export default class AlignPage extends ConversionPage {

    constructor(props) {
        super(props);

        this.initInputOptions = this.initInputOptions.bind(this);
        this.initShare = this.initShare.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.sendShareRequest = this.sendShareRequest.bind(this);
        this.sendForkRequest = this.sendForkRequest.bind(this);
        this.init = this.init.bind(this);

        this.beautifyUrl = '/hash/beautify';
        this.shareUrl = '/hash/share';
        this.forkUrl = '/hash/fork';

        this.LANGUAGE = {
            php: {
                mode: 'text/x-php',
                sample: '// Sample input\n\n' +
                    'array(\n' +
                    '  "Product ID" => 10440, "SKU" => "KOI-721",\n' +
                    '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL" => "https://www.domain.com/product/koi-721",\n' +
                    '  "Price" => 52, "Retail Price" => 78,\n' +
                    '  "Thumbnail URL" => "https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                    '  "Description" => "Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" => array(array("color" => "Rosewood","family" => "Red","price" => 42), array("color" => "Thyme Green","family" => "Green","price" => 59.99)),\n' +
                    '  "Date Created" => "2018-03-03 17:38:50"\n' +
                    ')\n',
                comment: '//'
            },
            ruby: {
                mode: 'text/x-ruby',
                sample: '# Sample input\n\n' +
                    '{\n' +
                    '  "Product ID" => 10440,"SKU" => "KOI-721",\n' +
                    '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL" => "https://www.domain.com/product/koi-721",\n' +
                    '  "Price" => 52, "Retail Price" => 78,\n' +
                    '  "Thumbnail URL" => "https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                    '  "Description" => "Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" => [{"color" => "Rosewood","family" => "Red","price" => 42}, {"color" => "Thyme Green","family" => "Green","price" => 59.99}],\n' +
                    '  "Date Created" => "2018-03-03 17:38:50"\n' +
                    '}',
                comment: '#'
            },
            javascript: {
                mode: 'text/typescript',
                sample: '// Sample input\n\n' +
                    '{\n' +
                    '  "Product ID":10440,"SKU":"KOI-721",\n' +
                    '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                    '  "Price":52,"Retail Price":78,\n' +
                    '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                    '  "Description":"Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" : [{"color" : "Rosewood","family" : "Red","price" : 42}, {"color" : "Thyme Green","family" : "Green","price" : 59.99}],\n' +
                    '  "Date Created":"2018-03-03 17:38:50"\n' +
                    '}',
                comment: '//'
            },
            python: {
                mode: 'text/x-python',
                sample: '// Sample input\n\n' +
                    '{\n' +
                    '  "Product ID":10440, "SKU":"KOI-721",\n' +
                    '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                    '  "Price":52, "Retail Price":78,\n' +
                    '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                    '  "Description":"Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" : [{"color" : "Rosewood","family" : "Red","price" : 42}, {"color" : "Thyme Green","family" : "Green","price" : 59.99}],\n' +
                    '  "Date Created":"2018-03-03 17:38:50"\n' +
                    '}',
                comment: '//'
            },
            perl: {
                mode: 'text/x-perl',
                sample: '# Sample input\n\n' +
                    '(\n' +
                    '  "Product ID" => 10440, "SKU" => "KOI-721",\n' +
                    '  "Name" => "Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL" => "https://www.domain.com/product/koi-721",\n' +
                    '  "Price" => 52, "Retail Price" => 78,\n' +
                    '  "Thumbnail URL" => "https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords" => "lorem, ipsum, dolor, ...",\n' +
                    '  "Description" => "Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" => (("color" => "Rosewood","family" => "Red","price" => 42), ("color" => "Thyme Green","family" => "Green","price" => 59.99)),\n' +
                    '  "Date Created" => "2018-03-03 17:38:50"\n' +
                    ')',
                comment: '#'
            },
            groovy: {
                mode: 'text/x-groovy',
                sample: '// Sample input\n\n' +
                    '[\n' +
                    '  "Product ID":10440, "SKU":"KOI-721",\n' +
                    '  "Name":"Basic Beauty Off-The-Shoulder Dress",\n' +
                    '  "Product URL":"https://www.domain.com/product/koi-721",\n' +
                    '  "Price":52, "Retail Price":78,\n' +
                    '  "Thumbnail URL":"https://www.domain.com/images/koi-721_600x600.png",\n' +
                    '  "Search Keywords":"lorem, ipsum, dolor, ...",\n' +
                    '  "Description":"Sociosqu facilisis duis ...",\n' +
                    '  "Color Swatches" : [["color" : "Rosewood","family" : "Red","price" : 42], ["color" : "Thyme Green","family" : "Green","price" : 59.99]],\n' +
                    '  "Date Created":"2018-03-03 17:38:50"\n' +
                    ']',
                comment: '//'
            }
        };
    }

    init() {
        super.init();
        this.initInputOptions();
        this.initButtons();
        this.initShare();

        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                this.sendBeautifyRequest();
            }
        });
    }

    initButtons() {
        super.initButtons();

        let _this = this;
        $("#beautify-btn").click(function() {
            _this.sendBeautifyRequest();
        });
    }

    initInputOptions() {
        let _this = this;
        $('#language').select2({width: 200, minimumResultsForSearch: Infinity, placeholder: "Select a language"});
        $('#language').change(function() {
            let language = $(this).val();
            _this.sourceCodeMirror.setOption("mode", _this.LANGUAGE[language].mode);
            _this.targetCodeMirror.setOption("mode", _this.LANGUAGE[language].mode);

            let currentSourceContent = _this.sourceCodeMirror.getValue().trim();

            let isSample = false;
            for ( const [language, data] of Object.entries(_this.LANGUAGE)) {
                if (data.sample.trim() == currentSourceContent) {
                    isSample = true;
                    break;
                }
            }

            if (isSample || currentSourceContent == "") {
                _this.sourceCodeMirror.setValue(_this.LANGUAGE[language].sample);
                _this.sourceCodeMirror.save();
            }
        });

        $('#indent-spaces').inputSpinner({groupClass: 'indent-spaces'});

        $('#value-aligned-check').change(function() {
            if (_this.targetCodeMirror.getValue().trim() != "") {
                _this.sendBeautifyRequest();
            }
        });
    }

    initShare() {
        let _this = this;

        if (_this.isThisShare()) {
            let input = window.gon.input;

            $('#language').val(input.language).trigger('change');
            ;
            $('#indent-spaces').val(input.indent);
            if (input.valueAligned == "1") {
                $('#value-aligned-check').attr('checked', 'checked');
            }
            _this.sourceCodeMirror.setValue(input.hash);

            _this.sendBeautifyRequest();

            new ClipboardJS('#share-btn', {
                text: function (trigger) {
                    return window.gon.base_url + window.gon.reference_number + '/' + window.gon.version;
                }
            }).on('success', function (e) {
                setTimeout(function () {
                    $('#share-btn').tooltip('hide');
                }, 2000);
            });
        }
    }

    sendBeautifyRequest() {
        let _this = this;

        let language = $('#language').val();

        if (language == undefined || language == "") {
            return;
        }

        let hashContent = _this.sourceCodeMirror.getValue().trim();
        hashContent = hashContent.replace(/\r\n/g, "\n");
        let filteredLines = [];

        hashContent.split('\n').forEach(function(line) {
            if (!line.trim().startsWith(_this.LANGUAGE[language]['comment'])) {
                filteredLines.push(line);
            }
        });

        if (hashContent != "") {
            _this.showLoadingOverlay();

            $.post(_this.beautifyUrl, {
                language: language,
                hash: filteredLines.join("\n"),
                indent: $('.indent-spaces .form-control-sm').val(),
                valueAligned: $('#value-aligned-check').is(":checked") ? 1 : 0
            }, function (response) {
                _this.targetCodeMirror.setValue(response.hash);
                $('#share-btn').show();
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

    sendShareRequest() {
        let _this = this;

        let language = $('#language').val();

        if (language == undefined || language == "") {
            return;
        }

        let hashContent = _this.sourceCodeMirror.getValue().trim();

        if (hashContent != "") {
            _this.showLoadingOverlay();

            $.post(_this.shareUrl, {
                input : {
                    language: language,
                    hash: hashContent,
                    indent: $('.indent-spaces .form-control-sm').val(),
                    valueAligned: $('#value-aligned-check').is(":checked") ? 1 : 0
                }
            }, function (response) {
                window.location.href = window.gon.base_url + 'hash/' + response.reference_number + '/' + response.version;
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
    };

    sendForkRequest() {
        let _this = this;

        _this.showLoadingOverlay();

        let language = $('#language').val();

        if (language == undefined || language == "") {
            return;
        }

        let hashContent = _this.sourceCodeMirror.getValue().trim();

        $.post(_this.forkUrl, {
            input : {
                language: language,
                hash: hashContent,
                indent: $('.indent-spaces .form-control-sm').val(),
                valueAligned: $('#value-aligned-check').is(":checked") ? 1 : 0
            },
            reference_number: window.gon.reference_number
        }, function (response) {
            window.location.href = window.gon.base_url + 'hash/' + response.reference_number + '/' + response.version;
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
    };

}