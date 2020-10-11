class PrettierBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `prettier --parser #{language} #{tempFile}`
  end
end