class SqlParseBeautifier < CodeBeautifier

  def self.execute_command(tempFile, language, options)

    `python3.7 #{Rails.root.to_s}/bin/sql-parse.py  #{tempFile}`
  end
end