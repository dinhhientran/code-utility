class SassConverter < CodeConverter

  def self.execute_command(tempFile, options)

    targetFile = generate_file_name_uuid + '.' + options[:to]

    if options[:to] != 'css'
      `sass-convert --from #{options[:from]} --to #{options[:to]} #{tempFile} #{targetFile}`
    else
      `sass #{tempFile} #{targetFile}`
    end

    result = File.read(targetFile)
    File.delete(targetFile)
    if File.exist?(targetFile + ".map")
      File.delete(targetFile + ".map")
    end
    result
  end

  def self.convert(code, options)
    tempFile = write_code(code, '.' + options[:from])
    result = execute_command(tempFile, options)

    if options[:to] == 'css' && !result.empty?
      result = result.strip.split("\n")
      if result.last.start_with?('/*# sourceMappingURL')
        result.pop
      end
      result = result.join("\n")
    end

    File.delete(tempFile)
    result
  end
end