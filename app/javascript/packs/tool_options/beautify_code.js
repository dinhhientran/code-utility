export const TOOL_OPTIONS = {
    php: `<div id="php_options" style="display: none">
<label>Rules</label>
<select id="rules" name="rules[]" multiple="multiple">
<option value="@PSR1" selected="selected">@PSR1</option>
<option value="@PSR2" selected="selected">@PSR2</option>
<option value="@Symfony" selected="selected">@Symfony</option>
</select>
<a href="#" data-toggle="modal" data-target="#php_rules_modal" class="align-middle ml-1" style="font-size: 21px"><i class="far fa-question-circle"></i></a>
</div>`,
    c: `<div id="c_options" style="display: none">
<label>Style</label>
<select name="style">
<option value="LLVM" selected="selected">LLVM</option>
<option value="Google">Google</option>
<option value="Chromium">Chromium</option>
<option value="Mozilla">Mozilla</option>
<option value="WebKit">WebKit</option>
<option value="Microsoft">Microsoft</option>
<option value="GNU">GNU</option>
</select>
<a href="#" data-toggle="modal" data-target="#c_styles_modal" class="align-middle ml-1" style="font-size: 21px"><i class="far fa-question-circle"></i></a>
</div>`
}