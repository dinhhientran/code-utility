class CommandExecutor

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'

  def self.execute_command(tempFile, language, options)
    return nil
  end

  def self.write_code(code, extension = "")
    tempFile = generate_file_name_uuid + extension
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    tempFile
  end

  def self.generate_file_name_uuid
    TEMP_DIRECTORY + SecureRandom.uuid
  end

end
