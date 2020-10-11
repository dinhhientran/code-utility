class CodeMinifier < CommandExecutor

  def self.getMinifierClass(tool)

    case tool
    when 'minify_html'
      Object.const_get('PrettyDiffMinifier')
    when 'minify_css'
      Object.const_get('PrettyDiffMinifier')
    when 'minify_javascript'
      Object.const_get('PrettyDiffMinifier')
    when 'minify_json'
      Object.const_get('PrettyDiffMinifier')
    when 'minify_sql'
      Object.const_get('SqlMinifier')
    end
  end

  def self.minify(code, options)
    tempFile = write_code(code)
    result = execute_command(tempFile, options)
    File.delete(tempFile)
    result
  end

end