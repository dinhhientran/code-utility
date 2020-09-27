class GoFmtBeautifier

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'

  def self.beautify(code, language, options)
    # style = options.nil? || options.empty? ? DEFAULT_STYLE : options[:style]
    tempFile = TEMP_DIRECTORY + SecureRandom.uuid
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    result = `gofmt #{tempFile}`
    File.delete(tempFile)
    result
  end
end