class ClangFormatBeautifier

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'
  DEFAULT_STYLE = 'LLVM'

  def self.beautify(code, language, options)
    style = options.nil? || options.empty? ? DEFAULT_STYLE : options[:style]
    tempFile = TEMP_DIRECTORY + SecureRandom.uuid + ".c"
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    result = `clang-format #{tempFile} --style=#{style}`
    File.delete(tempFile)
    result
  end
end