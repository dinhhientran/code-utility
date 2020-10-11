class Html2hamlConverter < CodeConverter

  def self.execute_command(tempFile, options)

    targetFile = generate_file_name_uuid
    `html2haml --erb #{tempFile} #{targetFile}`
    result = File.read(targetFile)
    File.delete(targetFile)
    result
  end
end