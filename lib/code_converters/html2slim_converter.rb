
class Html2slimConverter < CodeConverter

  def self.convert(code, options)
    tempFile = write_code(code)
    result = HTML2Slim.convert!(tempFile, :erb)
    File.delete(tempFile)
    result.to_s
  end
end