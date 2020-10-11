class RubocopBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `rubocop -a  #{tempFile}`
    File.read(tempFile)
  end
end