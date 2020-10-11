class BlackBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `black #{tempFile}`
    File.read(tempFile)
  end
end