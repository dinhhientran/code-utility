
class Html2jsxConverter < CodeConverter

  def self.execute_command(tempFile, options)

    `node #{Rails.root.to_s + '/bin/htmltojsx.js'} #{tempFile}`
  end
end