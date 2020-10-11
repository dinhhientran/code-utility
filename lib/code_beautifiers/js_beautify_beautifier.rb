class JsBeautifyBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `js-beautify #{tempFile}`
  end
end