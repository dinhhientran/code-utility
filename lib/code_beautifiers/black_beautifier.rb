class BlackBeautifier

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'

  def self.beautify(code, language, options)
    tempFile = TEMP_DIRECTORY + SecureRandom.uuid + ".py"
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    `black #{tempFile}`
    result = File.read(tempFile)
    File.delete(tempFile)
    result
  end
end