class PrettierBeautifier

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'

  def self.beautify(code, language, options)
    tempFile = TEMP_DIRECTORY + SecureRandom.uuid
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    result = `prettier --parser #{language} #{tempFile}`
    File.delete(tempFile)
    result
  end
end