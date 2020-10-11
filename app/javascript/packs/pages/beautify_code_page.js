import $ from "jquery";
import Toastr from "toastr/build/toastr.min.js"
import 'select2'
import CodeEditor from "../code_editor";
import ToolPage from "./abstracts/tool_page";
import {PHP_RULES_MODAL} from "../modals/php_rules.js";
import {BEAUTIFY_CODE_SAMPLE} from "../samples/beautify_code";
import {C_STYLES_MODAL} from "../modals/c_styles";
import {TOOL_OPTIONS} from "../tool_options/beautify_code";
import Cookies from "js-cookie";

export default class BeautifyCodePage extends ToolPage {

    constructor(props) {
        super(props);

        this.init = this.init.bind(this);
        this.initInputs = this.initInputs.bind(this);
        this.initPhp = this.initPhp.bind(this);
        this.initC = this.initC.bind(this);
        this.sendBeautifyRequest = this.sendBeautifyRequest.bind(this);
        this.getLanguageOptions = this.getLanguageOptions.bind(this);
        this.calculateEditorHeight = this.calculateEditorHeight.bind(this);
        this.onShareLoad = this.onShareLoad.bind(this);
        this.getCOptions = this.getCOptions.bind(this);
        this.getPhpOptions = this.getPhpOptions.bind(this);

        this.beautifyUrl = window.gon.tool_url + '/beautify';
        this.shareUrl = window.gon.tool_url + '/share';
        this.forkUrl = window.gon.tool_url + '/fork';

        this.LANGUAGE = {
            c: {
                name: 'C',
                mode: 'text/x-csrc',
                sample: BEAUTIFY_CODE_SAMPLE.c,
                extensions: ['.c', '.cats', '.cl', '.h', '.idc'],
                initFnc: this.initC,
                getOptionsFnc: this.getCOptions
            },
            cpp: {
                name: 'C++',
                mode: 'text/x-c++src',
                sample: BEAUTIFY_CODE_SAMPLE.cpp,
                extensions: ['.cpp', '.c', '.c++', '.cc', '.cp', '.cxx', '.h',
                             '.h++', '.hh', '.hpp', '.hxx', '.inc', '.inl', '.ino', '.ipp', '.re', '.tcc', '.tpp'],
                initFnc: this.initC,
                getOptionsFnc: this.getCOptions
            },
            objectiveC: {
                name: 'Objective-C',
                mode: 'text/x-objectivec',
                sample: BEAUTIFY_CODE_SAMPLE.objectC,
                extensions: ['.h', '.m', '.mm'],
                initFnc: this.initC,
                getOptionsFnc: this.getCOptions
            },
            csharp: {
                name: 'C#',
                mode: 'text/x-csharp',
                sample: BEAUTIFY_CODE_SAMPLE.csharp,
                extensions: ['.cs', '.cake', '.cshtml', '.csx'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            coldfusion: {
                name: 'ColdFusion',
                mode: 'text/x-csharp',
                sample: BEAUTIFY_CODE_SAMPLE.coldfusion,
                extensions: ['.cfc', '.cfm', '.cfml'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            go: {
                name: 'Go',
                mode: 'text/x-go',
                sample: BEAUTIFY_CODE_SAMPLE.go,
                extensions: ['.go'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            graphql: {
                name: 'GraphQL',
                mode: 'graphql',
                sample: BEAUTIFY_CODE_SAMPLE.graphql,
                extensions: ['.gpl', '.graphql'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            html: {
                name: 'HTML',
                mode: {
                    name: "htmlmixed",
                    scriptTypes: [
                        {matches: /\/x-handlebars-template|\/x-mustache/i, mode: null},
                        {matches: /(text|application)\/(x-)?vb(a|script)/i, mode: "vbscript"}
                    ]
                },
                sample: BEAUTIFY_CODE_SAMPLE.html,
                extensions: ['.html', '.html', '.xhtml'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            xml: {
                name: 'XML',
                mode: 'text/xml',
                sample: BEAUTIFY_CODE_SAMPLE.xml,
                extensions: ['.xml', '.classpath', '.project', 'App.config', 'NuGet.config', 'Settings.StyleCop', 'Web.Debug.config',
                    'Web.Release.config', 'Web.config', 'packages.config', '.adml', '.admx', '.ant', '.axml', '.builds',
                    '.ccproj', '.ccxml', '.clixml', '.cproject', '.cscfg', '.csdef', '.csl', '.csproj', '.ct','.depproj',
                    '.dita', '.ditamap', '.ditaval', '.dll.config', '.dotsettings', '.filters', '.fsproj', '.fxml', '.glade',
                    '.gml', '.grxml', '.gsp', '.iml', '.ivy', '.jelly', '.jsp', '.jsproj', '.kml', '.launch', '.mdpolicy',
                    '.mjml', '.mm', '.mod', '.mxml', '.natvis', '.ndproj', '.nproj', '.nuspec', '.odd', '.osm', '.pkgproj',
                    '.plist', '.pluginspec', '.proj', '.props', '.ps1xml', '.psc1', '.pt', '.rdf', '.resx', '.rss', '.sch',
                    '.scxml', '.sfproj', '.shproj', '.sld', '.srdf', '.stTheme', '.storyboard', '.sublime-snippet', '.targets',
                    '.tmCommand', '.tmLanguage', '.tmPreferences', '.tmSnippet', '.tmTheme', '.tml', '.ts', '.tsx', '.ui', '.urdf',
                    '.ux', '.vbproj', '.vcxproj', '.vsixmanifest', '.vssettings', '.vstemplate', '.vxml', '.wixproj', '.wsdl',
                    '.wsf', '.wxi', '.wxl', '.wxs', '.x3d', '.xacro', '.xaml', '.xhtml', '.xib', '.xlf', '.xliff', '.xmi', '.xml.dist', '.xproj', '.xsd', '.xsl', '.xspec', '.xul', '.zcml'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            htmlerb: {
                name: 'HTML+ERB',
                mode: 'application/x-erb',
                sample: BEAUTIFY_CODE_SAMPLE.htmlerb,
                extensions: ['.html.erb', '.html.erb', '.erb'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            svg: {
                name: 'SVG',
                mode: 'text/html',
                sample: BEAUTIFY_CODE_SAMPLE.svg,
                extensions: ['.svg'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            php: {
                name: 'PHP',
                mode: 'text/x-php',
                sample:  BEAUTIFY_CODE_SAMPLE.php,
                extensions: ['.php', '.php_cs', '.php_cs.dist', '.aw', '.ctp', '.fcgi', '.inc', '.module', '.php3',
                    '.php4', '.php5', '.phps', '.phpt'],
                initFnc: this.initPhp,
                getOptionsFnc: this.getPhpOptions
            },
            jsx: {
                name: 'JSX',
                mode: 'text/jsx',
                sample:  BEAUTIFY_CODE_SAMPLE.jsx,
                extensions: ['.js', '.jsx'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            java: {
                name: 'Java',
                mode: 'text/x-java',
                sample:  BEAUTIFY_CODE_SAMPLE.java,
                extensions: ['.java'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            javascript: {
                name: 'JavaScript',
                mode: 'text/typescript',
                sample: BEAUTIFY_CODE_SAMPLE.javascript,
                extensions: ['.js', '.es', '.es6', '.frag', '.gs', '.jake', '.jsb',
                    '.jscad', '.jsfl', '.jsm', '.jss', '.mjs', '.njs', '.pac', '.sjs', '.ssjs', '.xsjs', '.xsjslib'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            typescript: {
                name: 'TypeScript',
                mode: 'text/typescript',
                sample: BEAUTIFY_CODE_SAMPLE.typescript,
                extensions: ['.ts', '.tsx'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            less: {
                name: 'Less',
                mode: 'text/x-less',
                sample: BEAUTIFY_CODE_SAMPLE.less,
                extensions: ['.less'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            css: {
                name: 'CSS',
                mode: 'text/css',
                sample: BEAUTIFY_CODE_SAMPLE.css,
                extensions: ['.css'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            scss: {
                name: 'SCSS',
                mode: 'text/x-scss',
                sample: BEAUTIFY_CODE_SAMPLE.scss,
                extensions: ['.scss'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            python: {
                name: 'Python',
                mode: 'text/x-python',
                sample: BEAUTIFY_CODE_SAMPLE.python,
                extensions: ['.py', '.gclient', '*.bzl', '*.cgi', '*.fcgi', '*.gyp', '*.gypi',
                    '*.lmi', '*.py3', '*.pyde', '*.pyi', '*.pyp', '*.pyt', '*.pyw', '*.rpy', '*.spec', '*.tac', '*.wsgi', '*.xpy'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            sql: {
                name: 'SQL',
                mode: 'text/x-sql',
                sample: BEAUTIFY_CODE_SAMPLE.sql,
                extensions: ['.sql', '.cql', '.ddl', '.inc', '.mysql', '.prc', '.tab', '.udf', '.viw'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
            ruby: {
                name: 'Ruby',
                mode: 'text/x-ruby',
                sample: BEAUTIFY_CODE_SAMPLE.ruby,
                extensions: ['.rb'],
                initFnc: this.initNoOptions,
                getOptionsFnc: this.getNoOptions
            },
        };
    }

    init() {
        super.init();

        this.$optionColumn = $('#option-column');
        this.$buttonColumn = $('#button-column');
        this.$sourceColumn = $('#source-column');

        this.phpRuleDdlId = '#rules';
        this.phpRuleDescriptionDdlName = '#php_rule_description select';
        this.phpRuleContentContainerName = '#rule-content';

        this.$cOptions = $('#c_options');
        this.cStyleDdlName = "select[name=style]";

        this.$beautifyBtn = $("#beautify-btn");
        this.$languageDdl = $('#language');

        this.$headerTextRow = $('#h1-row');
        this.$inputOptionRow = $('#input-options');

        this.$exampleToggle = $('#example-toggle');
        this.$footer = $('footer');

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

    initPhp() {
        $('body').append($(PHP_RULES_MODAL));

        this.$phpOptions = $(TOOL_OPTIONS.php);
        this.$optionColumn.append(this.$phpOptions);

        this.$phpOptions.show();

        this.$phpRuleDdl =  this.$phpOptions.find(this.phpRuleDdlId);

        this.$phpRuleDdl.select2({width: 270, multiple: true});

        this.$phpRuleDescDdl = $(this.phpRuleDescriptionDdlName);

        this.$phpRuleDescDdl.select2({width: 120, minimumResultsForSearch: Infinity})
            .change(function() {
                $(this.phpRuleContentContainerName + ' > div').hide();
                $('#' + this.phpRuleContentContainerName + '.' + $(this).val() + '-rule').removeClass('d-none').show();
            });

        let sharedOptions = this.getSharedInputOptions();
        if (sharedOptions != null) {
            this.$phpRuleDdl.val(sharedOptions.rules).trigger('change');
        }
    }

    getPhpOptions() {
        return {
            rules: this.$phpRuleDdl.select2('val')
        };
    }

    initC() {
        $('body').append($(C_STYLES_MODAL));

        this.$cOptions = $(TOOL_OPTIONS.c);

        this.$optionColumn.append(this.$cOptions);

        this.$cOptions.show();
        this.$cStyleDdl = this.$cOptions.find(this.cStyleDdlName);
        this.$cStyleDdl.select2({width: 150, minimumResultsForSearch: Infinity});

        let sharedOptions = this.getSharedInputOptions();
        if (sharedOptions != null) {
            this.$cStyleDdl.val(sharedOptions.style).trigger('change');
        }
    }

    initNoOptions() {

    }

    getNoOptions() {
        return {};
    }

    getCOptions() {
        return {
            style: this.$cStyleDdl.select2('val')
        };
    }

    initButtons() {

        let _this = this;
        this.$beautifyBtn.click(function() {
            _this.sendBeautifyRequest();
        });

    }

    initInputs() {
        let _this = this;

        this.sourceEditor = new CodeEditor();
        this.sourceEditor.init({
            elementId: 'source-editor',
            theme: this.theme,
            onMaximize: this.onSourceEditorMaximize,
            onMinimize: this.onSourceEditorMinimize,
            calculateEditorHeight: this.calculateEditorHeight
        });

        let languages = [{id: '', text: ''}];

        for ( const [language, data] of Object.entries(_this.LANGUAGE)) {
            languages.push({id: language, text: data.name});
        }

        languages.sort((a, b) => {
            if (a.text < b.text) return -1
            return a.text > b.text ? 1 : 0
        });

        this.$languageDdl.select2({width: 200, data: languages, placeholder: "Select a language"});
        this.$languageDdl.change(function() {
            let language = $(this).val();

            _this.$headerTextRow.find('h1').text('Beautify ' + _this.LANGUAGE[language].name);

            _this.$optionColumn.find('div').remove();

            _this.sourceEditor.setMode(_this.LANGUAGE[language].mode);

            if (_this.showSampleCode) {

                let currentCode = _this.sourceEditor.getContent();
                let originalCode = _this.originalCode;

                let isSample = false;
                for (const [lang, data] of Object.entries(_this.LANGUAGE)) {
                    if (data.sample && (data.sample.trim() == currentCode || data.sample.trim() == originalCode)) {
                        isSample = true;
                        break;
                    }
                }

                if (isSample || currentCode == "") {
                    _this.sourceEditor.setContent(_this.LANGUAGE[language].sample);
                }
            }

            let initLanguage = _this.LANGUAGE[$(this).val()].initFnc;
            initLanguage();
        });

        this.$exampleToggle.click(function() {
            let showSampleCode = $(this).is(':checked');

            _this.showSampleCode = showSampleCode;

            Cookies.set(window.gon.tool + '_showSampleCode', showSampleCode);

            let language = _this.$languageDdl.val();

            let currentCode = _this.sourceEditor.getContent();
            let originalCode = _this.originalCode;

            if (!showSampleCode) {
                for (const [lang, data] of Object.entries(_this.LANGUAGE)) {
                    if (data.sample && (data.sample.trim() == currentCode || data.sample.trim() == originalCode)) {
                        _this.sourceEditor.setContent('');
                        break;
                    }
                }
            } else if (currentCode == "") {
                _this.sourceEditor.setContent(_this.LANGUAGE[language].sample);
            }
        });

        if (window.gon.language != undefined) {
            this.$languageDdl.val(window.gon.language).trigger('change');
        }
    }

    sendBeautifyRequest() {
        let _this = this;

        let input = this.getInput();

        this.originalCode = input.code;

        if (input != null) {
            this.showLoadingOverlay();

            $.post(this.beautifyUrl, {
                input : {
                    language: input.language,
                    code: input.code,
                    options: input.options,
                }
            }, function (response) {
                _this.sourceEditor.setContent(response.code);

                _this.showShareButton();
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

    getInput() {
        let language = this.$languageDdl.val();

        if (language == undefined || language == "") {
            return null;
        }

        let code = this.sourceEditor.getContent();

        if (code == "") {
            return null;
        }

        return {
            language: language,
            code: code,
            options: this.getLanguageOptions(language)
        }

    }

    getSharedInputOptions() {
        let language = this.$languageDdl.val();

        if (this.language != null && this.language != '' && this.input != undefined && this.input[language] != undefined) {
            return this.input[language].options;
        }

        return null;
    }

    getLanguageOptions(language) {
        let config = this.getSelectedLanguage(language);
        return config != null ? config.getOptionsFnc() : {};
    }

    getCodeToDownload() {
        return this.sourceEditor.getContent();
    }

    getSelectedLanguage() {
        let language = this.$languageDdl.val();

        if (language == undefined || language == "") {
            return null;
        }

        return this.LANGUAGE[language];
    }

    onThemeChange(theme) {
        this.sourceEditor.setTheme(theme);
    }

    onShareLoad(input) {
        this.input = {};
        this.input[input.language] = input;

        this.sourceEditor.setContent(input.code);

        this.$languageDdl.val(input.language).trigger('change');

        let _this = this;
        setTimeout(function() {
            _this.sendBeautifyRequest();
        }, 1000);
    }

    onUploadSuccess(response) {
        this.sourceEditor.setContent(response.content);
        for ( const [language, data] of Object.entries(this.LANGUAGE)) {
            if (data.extensions.indexOf(response.extension) != -1) {
                $('#language').val(language).trigger('change');
                break;
            }
        }
        this.uploadFileName = response.fileName;
    }

    onSourceEditorMaximize() {
        this.$buttonColumn.hide();

        this.$sourceColumn
            .removeClass('col-md-10')
            .addClass('col-md-12');

        this.$headerTextRow.hide();
        this.$inputOptionRow.hide();
        this.$footer.hide();
    }

    onSourceEditorMinimize() {
        this.$buttonColumn.show();

        this.$sourceColumn
            .removeClass('col-md-12')
            .addClass('col-md-10');

        this.$headerTextRow.show();
        this.$inputOptionRow.show();
        this.$footer.show();
    }

}