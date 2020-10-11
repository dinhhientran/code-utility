class SqlMinifier < CodeMinifier

  def self.execute_command(tempFile, options)

    `sql-minify #{tempFile}`
  end
end