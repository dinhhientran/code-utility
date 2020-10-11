class Json2yamlConverter < CodeConverter

  def self.execute_command(tempFile, options)
    result = nil

    if options[:to] == 'yaml'
      result = `json2yaml #{tempFile}`
    end

    if options[:to] == 'json'
      result = `yaml2json < #{tempFile}`
    end

    result
  end

end