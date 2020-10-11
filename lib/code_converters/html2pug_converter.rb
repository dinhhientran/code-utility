class Html2pugConverter < CodeConverter

  def self.execute_command(tempFile, options)

    `node #{Rails.root.to_s + '/bin/htmltopug.js'} #{tempFile}`
  end
end