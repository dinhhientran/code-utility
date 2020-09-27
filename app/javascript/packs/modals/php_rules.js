export const PHP_RULES_MODAL = `
<div class="modal fade" id="php_rules_modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">PHP Rules</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-12 text-right" id="php_rule_description">
          <label>Rules</label>
          <select>
            <option value="psr1" selected="selected">@PSR1</option>
            <option value="psr2">@PSR2</option>
            <option value="symfony">@Symfony</option>
          </select>
        </div>
      </div>
      <div class="row rule-content">
        <div class="col-md-12 psr1-rule">
          <p><span class="desc-green">Description of</span> @PSR1 <span class="desc-green">set.</span><br /><small>Detail: <a target="_blank" href="https://www.php-fig.org/psr/psr-1/">https://www.php-fig.org/psr/psr-1/</a></small></p>
          <p>
            * <span class="desc-green">Description of encoding</span><br />
          | PHP code MUST use only UTF-8 without BOM (remove BOM).
          </p>
          <p>
          * <span class="desc-green">full_opening_tag</span><br />
          | PHP code must use the long \`&lt;?php\` tags or short-echo \`&lt;?=\` tags and not other tag variations.
          </p>
        </div>
        <div class="col-md-12 d-none psr2-rule">
          <p><span class="desc-green">Description of</span> @PSR2 <span class="desc-green">set.</span><br /><small>Detail: <a target="_blank" href="https://www.php-fig.org/psr/psr-1/">https://www.php-fig.org/psr/psr-1/</a></small></p>

          <p>
            * <span class="desc-green">blank_line_after_namespace</span><br />
          | There MUST be one blank line after the namespace declaration.
          </p>

          <p>
            * <span class="desc-green">braces</span><br />
          | The body of each structure MUST be enclosed by braces. Braces should be properly placed. Body of braces should be properly indented.
          </p>
          <p>
          * <span class="desc-green">class_definition</span><br />
          | Whitespace around the keywords of a class, trait or interfaces definition should be one space.
          </p>

          <p>
          * <span class="desc-green">constant_case</span><br />
          | The PHP constants \`true\`, \`false\`, and \`null\` MUST be written using the correct casing.
          </p>

          <p>
            * <span class="desc-green">elseif</span><br />
          | The keyword \`elseif\` should be used instead of \`else if\` so that all control keywords look like single words.
          </p>

          <p>
            * <span class="desc-green">encoding</span><br />
          | PHP code MUST use only UTF-8 without BOM (remove BOM).
          </p>

          <p>
            * <span class="desc-green">full_opening_tag</span><br />
          | PHP code must use the long \`&lt;?php\` tags or short-echo \`&lt;?=\` tags and not other tag variations.
          </p>

          <p>
         * <span class="desc-green">function_declaration</span><br />
           | Spaces should be properly placed in a function declaration.
          </p>

          <p>
         * <span class="desc-green">indentation_type</span><br />
           | Code MUST use configured indentation type.
          </p>
          <p>
         * <span class="desc-green">line_ending</span><br />
           | All PHP files must use same line ending.
          </p>
          <p>
         * <span class="desc-green">lowercase_keywords</span><br />
           | PHP keywords MUST be in lower case.
          </p>

          <p>
         * <span class="desc-green">method_argument_space</span><br />
           | In method arguments and method call, there MUST NOT be a space before each comma and there MUST be one space after each comma. Argument lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument per line.<br />
           | Configuration: ['on_multiline' => 'ensure_fully_multiline']
          </p>

          <p>
          * <span class="desc-green">no_break_comment</span><br />
          | There must be a comment when fall-through is intentional in a non-empty case body.
          </p>

          <p>
          * <span class="desc-green">no_closing_tag</span><br />
          | The closing \`?>\` tag MUST be omitted from files containing only PHP.
          </p>

          <p>
          * <span class="desc-green">no_spaces_after_function_name</span><br />
          | When making a method or function call, there MUST NOT be a space between the method or function name and the opening parenthesis.
          </p>

          <p>
          * <span class="desc-green">no_spaces_inside_parenthesis</span><br />
          | There MUST NOT be a space after the opening parenthesis. There MUST NOT be a space before the closing parenthesis.
          </p>

          <p>
          * <span class="desc-green">no_trailing_whitespace</span><br />
          | Remove trailing whitespace at the end of non-blank lines.
          </p>

          <p>
          * <span class="desc-green">no_trailing_whitespace_in_comment</span><br />
          | There MUST be no trailing spaces inside comment or PHPDoc.
          </p>

          <p>
          * <span class="desc-green">single_blank_line_at_eof</span><br />
          | A PHP file without end tag must always end with a single empty line feed.
          </p>

          <p>
          * <span class="desc-green">single_class_element_per_statement</span><br />
          | There MUST NOT be more than one property or constant declared per statement.
          | Configuration: ['elements' => ['property']]
          </p>

          <p>
          * <span class="desc-green">single_import_per_statement</span><br />
          | There MUST be one use keyword per declaration.
          </p>

          <p>
          * <span class="desc-green">single_line_after_imports</span><br />
          | Each namespace use MUST go on its own line and there MUST be one blank line after the use statements block.
          </p>

          <p>
          * <span class="desc-green">switch_case_semicolon_to_colon</span><br />
          | A case should be followed by a colon and not a semicolon.
          </p>

          <p>
          * <span class="desc-green">switch_case_space</span><br />
          | Removes extra spaces between colon and case value.
          </p>

          <p>
          * <span class="desc-green">visibility_required</span><br />
          | Visibility MUST be declared on all properties and methods; \`abstract\` and \`final\` MUST be declared before the visibility; \`static\` MUST be declared after the visibility.
          </p>
        </div>
        <div class="col-md-12 d-none symfony-rule">
          <p><span class="desc-green">Description of</span> @Symfony <span class="desc-green">set.</span><br /><small>Detail: <a target="_blank" href="https://symfony.com/doc/2.7/contributing/code/standards.html">https://symfony.com/doc/2.7/contributing/code/standards.html</a></small></p>

          <p>
          * <span class="desc-green">array_syntax</span><br />
          | PHP arrays should be declared using the configured syntax.<br />
          | Configuration: ['syntax' => 'short']
          </p>

          <p>
          * <span class="desc-green">binary_operator_spaces</span><br />
          | Binary operators should be surrounded by space as configured.
          </p>

          <p>
          * <span class="desc-green">blank_line_after_namespace</span><br />
          | There MUST be one blank line after the namespace declaration.
          </p>

          <p>
          * <span class="desc-green">blank_line_after_opening_tag</span><br />
          | Ensure there is no code on the same line as the PHP open tag and it is followed by a blank line.
          </p>

          <p>
          * <span class="desc-green">blank_line_before_statement</span><br />
          | An empty line feed must precede any configured statement.<br />
          | Configuration: ['statements' => ['return']]
          </p>

          <p>
          * <span class="desc-green">braces</span><br />
          | The body of each structure MUST be enclosed by braces. Braces should be properly placed. Body of braces should be properly indented.<br />
          | Configuration: ['allow_single_line_closure' => true]
          </p>

          <p>
          * <span class="desc-green">cast_spaces</span><br />
          | A single space or none should be between cast and variable.
          </p>

          <p>
          * <span class="desc-green">class_attributes_separation</span><br />
          | Class, trait and interface elements must be separated with one blank line.<br />
          | Configuration: ['elements' => ['method']]
          </p>

          <p>
          * <span class="desc-green">class_definition</span><br />
          | Whitespace around the keywords of a class, trait or interfaces definition should be one space.<br />
          | Configuration: ['single_line' => true]
          </p>

          <p>
          * <span class="desc-green">concat_space</span><br />
          | Concatenation should be spaced according configuration.
          </p>

          <p>
          * <span class="desc-green">constant_case</span><br />
          | The PHP constants \`true\`, \`false\`, and \`null\` MUST be written using the correct casing.
          </p>

          <p>
          * <span class="desc-green">declare_equal_normalize</span><br />
          | Equal sign in declare statement should be surrounded by spaces or not following configuration.
          </p>

          <p>
          * <span class="desc-green">elseif</span><br />
          | The keyword \`elseif\` should be used instead of \`else if\` so that all control keywords look like single words.
          </p>

          <p>
          * <span class="desc-green">encoding</span><br />
          | PHP code MUST use only UTF-8 without BOM (remove BOM).
          </p>

          <p>
          * <span class="desc-green">full_opening_tag</span><br />
          | PHP code must use the long \`&lt;?php\` tags or short-echo \`&lt;?=\` tags and not other tag variations.
          </p>

          <p>
         * <span class="desc-green">function_declaration</span><br />
           | Spaces should be properly placed in a function declaration.
          </p>

          <p>
         * <span class="desc-green">function_typehint_space</span><br />
           | Ensure single space between function's argument and its typehint.
          </p>

          <p>
         * <span class="desc-green">include</span><br />
           | Include/Require and file path should be divided with a single space. File path should not be placed under brackets.
          </p>

          <p>
         * <span class="desc-green">increment_style</span><br />
           | Pre- or post-increment and decrement operators should be used if possible.
          </p>

          <p>
         * <span class="desc-green">indentation_type</span><br />
           | Code MUST use configured indentation type.
          </p>

          <p>
         * <span class="desc-green">line_ending</span><br />
           | All PHP files must use same line ending.
          </p>

          <p>
         * <span class="desc-green">lowercase_cast</span><br />
           | Cast should be written in lower case.
          </p>

          <p>
         * <span class="desc-green">lowercase_keywords</span><br />
           | PHP keywords MUST be in lower case.
          </p>

          <p>
         * <span class="desc-green">lowercase_static_reference</span><br />
           | Class static references \`self\`, \`static\` and \`parent\` MUST be in lower case.
          </p>

          <p>
         * <span class="desc-green">magic_constant_casing</span><br />
           | Magic constants should be referred to using the correct casing.
          </p>

          <p>
         * <span class="desc-green">magic_method_casing</span><br />
           | Magic method definitions and calls must be using the correct casing.
          </p>

          <p>
         * <span class="desc-green">method_argument_space</span><br />
           | In method arguments and method call, there MUST NOT be a space before each comma and there MUST be one space after each comma. Argument lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument per line.
          </p>

          <p>
         * <span class="desc-green">native_function_casing</span><br />
           | Function defined by PHP should be called using the correct casing.
          </p>

          <p>
         * <span class="desc-green">native_function_type_declaration_casing</span><br />
           | Native type hints for functions should use the correct case.
          </p>

          <p>
         * <span class="desc-green">new_with_braces</span><br />
           | All instances created with new keyword must be followed by braces.
          </p>

          <p>
         * <span class="desc-green">no_blank_lines_after_class_opening</span><br />
           | There should be no empty lines after class opening brace.
          </p>

          <p>
         * <span class="desc-green">no_blank_lines_after_phpdoc</span><br />
           | There should not be blank lines between docblock and the documented element.
          </p>

          <p>
         * <span class="desc-green">no_break_comment</span><br />
           | There must be a comment when fall-through is intentional in a non-empty case body.
          </p>

          <p>
         * <span class="desc-green">no_closing_tag</span><br />
           | The closing \`?&gt;\` tag MUST be omitted from files containing only PHP.
          </p>

          <p>
          * <span class="desc-green">no_empty_comment</span><br />
          | There should not be any empty comments.
          </p>

          <p>
          * <span class="desc-green">no_empty_phpdoc</span><br />
          | There should not be empty PHPDoc blocks.
          </p>

          <p>
          * <span class="desc-green">no_empty_statement</span><br />
          | Remove useless semicolon statements.
          </p>

          <p>
          * <span class="desc-green">no_extra_blank_lines</span><br />
          | Removes extra blank lines and/or blank lines following configuration.<br />
          | Configuration: ['tokens' => ['curly_brace_block', 'extra', 'parenthesis_brace_block', 'square_brace_block', 'throw', 'use']]
          </p>

          <p>
          * <span class="desc-green">no_leading_import_slash</span><br />
          | Remove leading slashes in \`use\` clauses.
          </p>

          <p>
          * <span class="desc-green">no_leading_namespace_whitespace</span><br />
          | The namespace declaration line shouldn't contain leading whitespace.
          </p>

          <p>
          * <span class="desc-green">no_mixed_echo_print</span><br />
          | Either language construct \`print\` or \`echo\` should be used.
          </p>

          <p>
          * <span class="desc-green">no_multiline_whitespace_around_double_arrow</span><br />
          | Operator \`=>\` should not be surrounded by multi-line whitespaces.
          </p>

          <p>
          * <span class="desc-green">no_short_bool_cast</span><br />
          | Short cast \`bool\` using double exclamation mark should not be used.
          </p>

          <p>
          * <span class="desc-green">no_singleline_whitespace_before_semicolons</span><br />
          | Single-line whitespace before closing semicolon are prohibited.
          </p>

          <p>
          * <span class="desc-green">no_spaces_after_function_name</span><br />
          | When making a method or function call, there MUST NOT be a space between the method or function name and the opening parenthesis.
          </p>

          <p>
          * <span class="desc-green">no_spaces_around_offset</span><br />
          | There MUST NOT be spaces around offset braces.
          </p>

          <p>
          * <span class="desc-green">no_spaces_inside_parenthesis</span><br />
          | There MUST NOT be a space after the opening parenthesis. There MUST NOT be a space before the closing parenthesis.
          </p>

          <p>
          * <span class="desc-green">no_superfluous_phpdoc_tags</span><br />
          | Removes \`@param\`, \`@return\` and \`@var\` tags that don't provide any useful information.<br />
          | Configuration: ['allow_mixed' => true, 'allow_unused_params' => true]
          </p>

          <p>
          * <span class="desc-green">no_trailing_comma_in_list_call</span><br />
          | Remove trailing commas in list function calls.
          </p>

          <p>
          * <span class="desc-green">no_trailing_comma_in_singleline_array</span><br />
          | PHP single-line arrays should not have trailing comma.
          </p>

          <p>
          * <span class="desc-green">no_trailing_whitespace</span><br />
          | Remove trailing whitespace at the end of non-blank lines.
          </p>

          <p>
          * <span class="desc-green">no_trailing_whitespace_in_comment</span><br />
          | There MUST be no trailing spaces inside comment or PHPDoc.
          </p>

          <p>
          * <span class="desc-green">no_unneeded_control_parentheses</span><br />
          | Removes unneeded parentheses around control statements.
          </p>

          <p>
          * <span class="desc-green">no_unneeded_curly_braces</span><br />
          | Removes unneeded curly braces that are superfluous and aren't part of a control structure's body.
          | Configuration: ['namespaces' => true]
          </p>

          <p>
          * <span class="desc-green">no_unused_imports</span><br />
          | Unused \`use\` statements must be removed.
          </p>

          <p>
          * <span class="desc-green">no_whitespace_before_comma_in_array</span><br />
          | In array declaration, there MUST NOT be a whitespace before each comma.
          </p>

          <p>
          * <span class="desc-green">no_whitespace_in_blank_line</span><br />
          | Remove trailing whitespace at the end of blank lines.
          </p>

          <p>
          * <span class="desc-green">normalize_index_brace</span><br />
          | Array index should always be written by using square braces.
          </p>

          <p>
          * <span class="desc-green">object_operator_without_whitespace</span><br />
          | There should not be space before or after object \`T_OBJECT_OPERATOR\` \`-&gt;\`.
          </p>

          <p>
          * <span class="desc-green">ordered_imports</span><br />
          | Ordering \`use\` statements.
          </p>

          <p>
          * <span class="desc-green">php_unit_fqcn_annotation</span><br />
          | PHPUnit annotations should be a FQCNs including a root namespace.
          </p>

          <p>
          * <span class="desc-green">phpdoc_align</span><br />
          | All items of the given phpdoc tags must be either left-aligned or (by default) aligned vertically.<br />
          | Configuration: ['tags' => ['method', 'param', 'property', 'return', 'throws', 'type', 'var']]
          </p>

          <p>
          * <span class="desc-green">phpdoc_annotation_without_dot</span><br />
          | PHPDoc annotation descriptions should not be a sentence.
          </p>

          <p>
          * <span class="desc-green">phpdoc_indent</span><br />
          | Docblocks should have the same indentation as the documented subject.
          </p>

          <p>
          * <span class="desc-green">phpdoc_inline_tag</span><br />
          | Fix PHPDoc inline tags, make \`@inheritdoc\` always inline.
          </p>

          <p>
          * <span class="desc-green">phpdoc_no_access</span><br />
          | \`@access\` annotations should be omitted from PHPDoc.
          </p>

          <p>
          * <span class="desc-green">phpdoc_no_alias_tag</span><br />
          | No alias PHPDoc tags should be used.
          </p>

          <p>
          * <span class="desc-green">phpdoc_no_package</span><br />
          | \`@package\` and \`@subpackage\` annotations should be omitted from PHPDoc.
          </p>

          <p>
          * <span class="desc-green">phpdoc_no_useless_inheritdoc</span><br />
          | Classy that does not inherit must not have \`@inheritdoc\` tags.
          </p>

          <p>
          * <span class="desc-green">phpdoc_return_self_reference</span><br />
          | The type of \`@return\` annotations of methods returning a reference to itself must the configured one.
          </p>

          <p>
          * <span class="desc-green">phpdoc_scalar</span><br />
          | Scalar types should always be written in the same form. \`int\` not \`integer\`, \`bool\` not \`boolean\`, \`float\` not \`real\` or \`double\`.
          </p>

          <p>
          * <span class="desc-green">phpdoc_separation</span><br />
          | Annotations in PHPDoc should be grouped together so that annotations of the same type immediately follow each other, and annotations of a different type are separated by a single blank line.
          </p>

          <p>
          * <span class="desc-green">phpdoc_single_line_var_spacing</span><br />
          | Single line \`@var\` PHPDoc should have proper spacing.
          </p>

          <p>
          * <span class="desc-green">phpdoc_summary</span><br />
          | PHPDoc summary should end in either a full stop, exclamation mark, or question mark.
          </p>

          <p>
          * <span class="desc-green">phpdoc_to_comment</span><br />
          | Docblocks should only be used on structural elements.
          </p>

          <p>
          * <span class="desc-green">phpdoc_trim</span><br />
          | PHPDoc should start and end with content, excluding the very first and last line of the docblocks.
          </p>

          <p>
          * <span class="desc-green">phpdoc_trim_consecutive_blank_line_separation</span><br />
          | Removes extra blank lines after summary and after description in PHPDoc.
          </p>

          <p>
          * <span class="desc-green">phpdoc_types</span><br />
          | The correct case must be used for standard PHP types in PHPDoc.
          </p>

          <p>
          * <span class="desc-green">phpdoc_types_order</span><br />
          | Sorts PHPDoc types.<br />
          | Configuration: ['null_adjustment' => 'always_last', 'sort_algorithm' => 'none']
          </p>

          <p>
          * <span class="desc-green">phpdoc_var_without_name</span><br />
          | \`@var\` and \`@type\` annotations of classy properties should not contain the name.
          </p>

          <p>
          * <span class="desc-green">return_type_declaration</span><br />
          | There should be one or no space before colon, and one space after it in return type declarations, according to configuration.
          </p>

          <p>
          * <span class="desc-green">semicolon_after_instruction</span><br />
          | Instructions must be terminated with a semicolon.
          </p>

          <p>
          * <span class="desc-green">short_scalar_cast</span><br />
          | Cast \`(boolean)\` and \`(integer)\` should be written as \`(bool)\` and \`(int)\`, \`(double)\` and \`(real)\` as \`(float)\`, \`(binary)\` as \`(string)\`.
          </p>

          <p>
          * <span class="desc-green">single_blank_line_at_eof</span><br />
          | A PHP file without end tag must always end with a single empty line feed.
          </p>

          <p>
          * <span class="desc-green">single_blank_line_before_namespace</span><br />
          | There should be exactly one blank line before a namespace declaration.
          </p>

          <p>
          * <span class="desc-green">single_class_element_per_statement</span><br />
          | There MUST NOT be more than one property or constant declared per statement.
          </p>

          <p>
          * <span class="desc-green">single_import_per_statement</span><br />
          | There MUST be one use keyword per declaration.
          </p>

          <p>
          * <span class="desc-green">single_line_after_imports</span><br />
          | Each namespace use MUST go on its own line and there MUST be one blank line after the use statements block.
          </p>

          <p>
          * <span class="desc-green">single_line_comment_style</span><br />
          | Single-line comments and multi-line comments with only one line of actual content should use the \`//\` syntax.<br />
          | Configuration: ['comment_types' => ['hash']]
          </p>

          <p>
          * <span class="desc-green">single_line_throw</span><br />
          | Throwing exception must be done in single line.
          </p>

          <p>
          * <span class="desc-green">single_quote</span><br />
          | Convert double quotes to single quotes for simple strings.
          </p>

          <p>
          * <span class="desc-green">single_trait_insert_per_statement</span><br />
          | Each trait \`use\` must be done as single statement.
          </p>

          <p>
          * <span class="desc-green">space_after_semicolon</span><br />
          | Fix whitespace after a semicolon.<br />
          | Configuration: ['remove_in_empty_for_expressions' => true]
          </p>

          <p>
          * <span class="desc-green">standardize_increment</span><br />
          | Increment and decrement operators should be used if possible.
          </p>

          <p>
          * <span class="desc-green">standardize_not_equals</span><br />
          | Replace all \`&lt;&gt;\` with \`!=\`.
          </p>

          <p>
          * <span class="desc-green">switch_case_semicolon_to_colon</span><br />
          | A case should be followed by a colon and not a semicolon.
          </p>

          <p>
          * <span class="desc-green">switch_case_space</span><br />
          | Removes extra spaces between colon and case value.
          </p>

          <p>
          * <span class="desc-green">ternary_operator_spaces</span><br />
          | Standardize spaces around ternary operator.
          </p>

          <p>
          * <span class="desc-green">trailing_comma_in_multiline_array</span><br />
          | PHP multi-line arrays should have a trailing comma.
          </p>

          <p>
          * <span class="desc-green">trim_array_spaces</span><br />
          | Arrays should be formatted like function/method arguments, without leading or trailing single line space.
          </p>

          <p>
          * <span class="desc-green">unary_operator_spaces</span><br />
          | Unary operators should be placed adjacent to their operands.
          </p>

          <p>
          * <span class="desc-green">visibility_required</span><br />
          | Visibility MUST be declared on all properties and methods; \`abstract\` and \`final\` MUST be declared before the visibility; \`static\` MUST be declared after the visibility.
          </p>

          <p>
          * <span class="desc-green">whitespace_after_comma_in_array</span><br />
          | In array declaration, there MUST be a whitespace after each comma.
          </p>

          <p>
            * <span class="desc-green">yoda_style</span><br />
          | Write conditions in Yoda style (\`true\`), non-Yoda style (\`false\`) or ignore those conditions (\`null\`) based on configuration.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`