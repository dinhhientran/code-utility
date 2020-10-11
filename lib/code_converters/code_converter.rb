class CodeConverter < CommandExecutor

  def self.getConverterClass(tool)

    case tool
    when 'html2haml'
      Object.const_get('Html2hamlConverter')
    when 'html2slim'
      Object.const_get('Html2slimConverter')
    when 'html2jsx'
      Object.const_get('Html2jsxConverter')
    when 'html2pug'
      Object.const_get('Html2pugConverter')
    when 'css2scss'
      Object.const_get('SassConverter')
    when 'json2yaml'
      Object.const_get('Json2yamlConverter')
    end
  end

  def self.convert(code, options)
    tempFile = write_code(code)
    result = execute_command(tempFile, options)
    File.delete(tempFile)
    result
  end

end