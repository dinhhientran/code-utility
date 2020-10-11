class SqlParseBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `python #{Rails.root.to_s}/bin/sql-parse.py  #{tempFile}`
  end
end