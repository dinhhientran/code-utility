class GoFmtBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `gofmt #{tempFile}`
  end
end