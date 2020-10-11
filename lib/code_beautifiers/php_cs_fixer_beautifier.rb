class PhpCsFixerBeautifier < CodeBeautifier

  PHP_CS_FIXER = Rails.root.to_s + '/bin/php-cs-fixer.phar'
  DEFAULT_RULES = %w[@PSR1 @PSR2 @Symfony]

  def self.execute_command(tempFile, language, options)
    rules = options.nil? || options[:rules].nil? || options[:rules].empty? ? DEFAULT_RULES : options[:rules]

    system("php " + PHP_CS_FIXER + ' fix ' + tempFile + ' --rules=' + rules.join(','))
    File.read(tempFile)
  end
end