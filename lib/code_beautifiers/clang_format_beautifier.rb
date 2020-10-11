class ClangFormatBeautifier < CodeBeautifier

  DEFAULT_STYLE = 'LLVM'

  def self.execute_command(tempFile, language, options)
    style = options.nil? || options.empty? ? DEFAULT_STYLE : options[:style]

    `clang-format #{tempFile} --style=#{style}`
  end
end