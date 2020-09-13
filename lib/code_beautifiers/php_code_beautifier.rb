class PhpCodeBeautifier

  TEMP_DIRECTORY = Rails.root.to_s + '/tmp/files/'
  PHP_CS_FIXER = Rails.root.to_s + '/beautifiers/php-cs-fixer.phar'
  DEFAULT_RULES = %w[@PSR1 @PSR2 @Symfony]

  def self.beautify(code, rules)
    rules = rules.nil? || rules.empty? ? DEFAULT_RULES : rules
    tempFile = TEMP_DIRECTORY + SecureRandom.uuid + ".php"
    File.open(tempFile, "w+") do |f|
      f.write(code)
    end
    system("php " + PHP_CS_FIXER + ' fix ' + tempFile + ' --rules=' + rules.join(','))
    result = File.read(tempFile)
    File.delete(tempFile)
    result
  end
end