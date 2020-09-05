class HashParser

  STRING_QUOTE = %w[" ']
  NULL_VALUES = %w[null NULL]
  COMMA = ','
  COLON = [':']
  LEFT_BRACKET = ['[']
  RIGHT_BRACKET = [']']
  LEFT_BRACE = ['{']
  RIGHT_BRACE = ['}']
  WHITESPACE = [' ', '\t', '\b', '\n', '\r']
  SYNTAX = [COMMA, COLON, LEFT_BRACKET, RIGHT_BRACKET, LEFT_BRACE, RIGHT_BRACE].flatten

  # regex
  STRING_REGEX = /\A(?:\s*)(""|''|'.*?[^\\]'|".*?[^\\]")(?:\s*)(.*)/m
  NUMBER_REGEX = /\A(?:\s*)(-?\d+\.?[\d_][eE-]?(?:\d+)?|0[xXbB][0-9a-fA-F]+|\d+|-\d+)(?:\s*)(.*)/m
  BOOL_REGEX = /\A(?:\s*)(true|false|TRUE|FALSE|True|False)(?:\s*)(.*)/
  NULL_REGEX = /\A(?:\s*)(#{NULL_VALUES.join('|')})(?:\s+?)(.*)/m
  SYMBOL_REGEX = /\A(?:\s*)(:\w+)(?:\s*)(.*)/m
  VARIABLE_REGEX = /\A(?:\s*)(\w+\.\w+|\w+::\w+|@\w+|\$\w+|\w+)(?:\s*)(.*)/m
  REGEX_REGEX = /\A(\/.*[^\\]\/\w*)(?:\s*)(.*)/m
  EXPRESSION_REGEX = /\A(?:\s*)([^#{[COMMA, COLON].flatten.join('|')}]+)(?:\s*)(.*)/m

  LEX_FUNCTIONS = %w[lexString lexNumber lexBool lexNull lexSymbol lexFunction lexRegex lexVariable lexExpression]

  def self.parse(input = nil)
    hashParser = self.new
    hashParser.parse(input)
  end

  def self.getHashParserClass(language)
    case language
      when 'php'
        PhpHashParser
      when 'ruby'
        RubyHashParser
      when 'javascript'
        JsHashParser
      when 'python'
        PythonHashParser
      when 'perl'
        PerlHashParser
      when 'groovy'
        GroovyHashParser
    end
  end

  def parse(input)
    raise ArgumentError.new("Input should not be empty") if input.nil? or input.strip.empty?
    tokens = lex(input)
    _parse(tokens, isRoot = true)[0]
  end

  protected

  def lexString(hash)

    return [nil, hash] if !hash.start_with?(*STRING_QUOTE)

    scannedStr = hash.scan(self.class::STRING_REGEX).flatten

    if !scannedStr.empty?
      [scannedStr[0], scannedStr[1]]
    else
      raise HashParserError.new("Expected end-of-string quote")
    end
  end

  def lexType(hash, regex)
    scanned = hash.scan(regex).flatten
    if !scanned.empty?
      [scanned[0], scanned[1]]
    else
      [nil, hash]
    end
  end

  def lexNumber(hash)
    lexType(hash, self.class::NUMBER_REGEX)
  end

  def lexBool(hash)
    lexType(hash, self.class::BOOL_REGEX)
  end

  def lexNull(hash)
    lexType(hash, self.class::NULL_REGEX)
  end

  def lexSymbol(hash)
    lexType(hash, self.class::SYMBOL_REGEX)
  end
  
  def lexVariable(hash)
    lexType(hash, self.class::VARIABLE_REGEX)
  end

  def lexFunction(hash)
    return [nil, hash] if hash.start_with?(*self.class::SYNTAX)
    bracket = {:open => 0, :close => 0}
    function = ''
    if hash.match?(/\A(?:\s*)(\w+(\:\:|.)\w+(?:\w+)?\()(.*)/m)
      hash.chars.each do |char|
        if (bracket[:open] == 0 and bracket[:close] == 0) || bracket[:open] != bracket[:close]
          bracket[:open] = bracket[:open] + 1 if char == '('
          bracket[:close] = bracket[:close] + 1 if char == ')'
          function += char
        end
      end
      if bracket[:open] == bracket[:close]
        [function, hash[function.size, hash.size]]
      else
        [nil, hash]
      end
    else
      [nil, hash]
    end
  end

  def lexRegex(hash)
    lexType(hash, self.class::REGEX_REGEX)
  end

  def lexExpression(hash)
    if !hash.start_with?(*self.class::SYNTAX)
      lexType(hash, self.class::EXPRESSION_REGEX)
    else
      [nil, hash]
    end
  end

  def lex(hash)
    tokens = []

    while !hash.nil? and hash.size > 0
      if hash.start_with?(*self.class::SYNTAX)
        syntaxChars = nil
        self.class::SYNTAX.each do |chars|
          if hash.start_with?(chars)
            syntaxChars = chars
            break
          end
        end
        tokens.push(syntaxChars)
        hash = hash[syntaxChars.size, hash.size - 1]
        hash = hash.strip if !hash.nil?
      end

      if !hash.nil? and hash.strip != ""
        self.class::LEX_FUNCTIONS.each do |function|
          result, hash = self.send(function.to_sym, hash)
          if !result.nil?
            tokens.push(result)
            break
          end
        end
      end

      hash = hash.strip
    end
    tokens
  end

  def parseArray(tokens)
    originTokens = tokens
    array = []
    t = tokens[0]
    return array, tokens[1, tokens.size - 1] if self.class::RIGHT_BRACKET.include?(t)

    while true
      hash, tokens = _parse(tokens)
      array.push(hash)
      t = tokens[0]
      return array, tokens[1, tokens.size - 1] if self.class::RIGHT_BRACKET.include?(t)
      # in case there is colon after object, it should be an hash
      return parseHash(originTokens) if self.class::LEFT_BRACE == self.class::LEFT_BRACKET and self.class::COLON.include?(t)
      raise HashParserError.new("Expected comma after object in array") if t != self.class::COMMA
      tokens = tokens[1, tokens.size - 1]
    end

    raise HashParserError.new("Expected end-of-array bracket")
  end

  def parseHash(tokens)
    object = {}
    t = tokens[0]
    return object, tokens[1, tokens.size - 1] if self.class::RIGHT_BRACE.include?(t)

    while true
      key = tokens[0]
      if key.is_a? String
        tokens = tokens[1, tokens.size - 1]
      else
        raise HashParserError.new("Expected string key, got: #{key}")
      end

      raise HashParserError.new("Expected colon after key in object, got: #{t}") if !self.class::COLON.include?(tokens[0])

      value, tokens = _parse(tokens[1, tokens.size - 1])
      object[key] = value
      t = tokens[0]
      return object, tokens[1, tokens.size - 1] if self.class::RIGHT_BRACE.include?(t)
      raise HashParserError.new("Expected comma after pair in object, got: #{t}") if t != self.class::COMMA

      tokens = tokens[1, tokens.size - 1]
    end

    raise HashParserError.new("Expected end-of-object bracket")
  end

  def _parse(tokens, isRoot = false)
    t = tokens[0]

    if self.class::LEFT_BRACKET.include?(t)
      return parseArray(tokens[1, tokens.size - 1])
    elsif self.class::LEFT_BRACE.include?(t)
      return parseHash(tokens[1, tokens.size - 1])
    else
      return t, tokens[1, tokens.size - 1]
    end
  end
end