class PrettyDiffMinifier < CodeMinifier

  def self.execute_command(tempFile, options)

    `prettydiff minify #{tempFile}`
  end
end