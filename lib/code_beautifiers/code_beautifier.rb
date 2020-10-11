class CodeBeautifier < CommandExecutor

  def self.getBeautifierClass(language)

    case language
    when 'php'
      Object.const_get('PhpCsFixerBeautifier')
    when 'c', 'cpp', 'objectiveC'
      Object.const_get('ClangFormatBeautifier')
    when 'csharp', 'coldfusion', 'html', 'jsx', 'java', 'less', 'css', 'scss',
        'ejs', 'htmlerb', 'xml', 'svg', 'json'
      Object.const_get('PrettyDiffBeautifier')
    when 'go'
      Object.const_get('GoFmtBeautifier')
    when 'graphql'
      Object.const_get('PrettierBeautifier')
    when 'javascript', 'typescript'
      Object.const_get('JsBeautifyBeautifier')
    when 'python'
      Object.const_get('BlackBeautifier')
    when 'sql'
      Object.const_get('SqlParseBeautifier')
    when 'ruby'
      Object.const_get('RubocopBeautifier')
    end
  end

  def self.beautify(code, language, options)
    tempFile = write_code(code)
    result = execute_command(tempFile, language, options)
    File.delete(tempFile)
    result
  end

end