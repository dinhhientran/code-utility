class PrettyDiffBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)
    optionStr = !options.nil? && !options[:indent_size].nil? ? "-o indent_size=#{options[:indent_size]}" : ""

    `prettydiff beautify #{optionStr} source:#{tempFile}`
  end
end