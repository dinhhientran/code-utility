class HashBeautifier

  COMMA = ','
  COLON = ':'
  LEFT_BRACKET = '['
  RIGHT_BRACKET = ']'
  LEFT_BRACE = '{'
  RIGHT_BRACE = '}'

  DEFAULT_INDENT = 2
  DEFAULT_VALUE_ALIGNED = true

  def initialize(hash = nil)
    @hash = hash
  end

  def setHash(hash)
    @hash = hash
  end

  def self.getBeautifierInstance(language)
    case language
      when 'php'
        PhpHashBeautifier.new
      when 'ruby'
        RubyHashBeautifier.new
      when 'javascript'
        JsHashBeautifier.new
      when 'python'
        PythonHashBeautifier.new
      when 'perl'
        PerlHashBeautifier.new
      when 'groovy'
        GroovyHashBeautifier.new
    end
  end

  def setIndent(noOfSpaces)
    @indent = noOfSpaces.to_i
  end

  def setValueAligned(value)
    @valueAligned = value
  end

  def beautify
    raise ArgumentError.new("Hash should not be null") if @hash.nil?
    _beautify(@hash, @indent || self.class::DEFAULT_INDENT, true)
  end

  private

  def _beautify(hash, indent, isRoot = false, isHashItem = false)
    if hash.is_a? Hash
      longestKey =  hash.keys.map { |key| key.to_s.length }.max
      hash = hash.map do |key, value|
        key = "#{whiteSpaces(indent + indent())}#{key.to_s}#{valueAligned ? whiteSpaces(longestKey - key.to_s.length) : ' '}#{self.class::COLON}"
        if value.is_a? String
          "#{key} #{value}"
        else
          "#{key} #{_beautify(value, indent + indent(), false, true)}"
        end
      end
      "#{!isRoot && !isHashItem ? whiteSpaces(indent) : ''}#{self.class::LEFT_BRACE}\n#{hash.join("#{self.class::COMMA}\n")}\n#{!isRoot ? whiteSpaces(indent) : ''}#{self.class::RIGHT_BRACE}"
    elsif hash.is_a? Array
      array = hash.map { |item| _beautify(item, indent + indent())}
      "#{!isRoot && !isHashItem ? whiteSpaces(indent) : ''}#{self.class::LEFT_BRACKET}\n#{array.join("#{self.class::COMMA}\n")}\n#{!isRoot ? whiteSpaces(indent) : ''}#{self.class::RIGHT_BRACKET}"
    else
      "#{!isRoot ? whiteSpaces(indent) : ''}#{hash}"
    end
  end

  def whiteSpaces(n)
    Array.new(n).map{|w| " "}.join
  end

  def indent
    @indent || self.class::DEFAULT_INDENT
  end

  def valueAligned
    !@valueAligned.nil? ? @valueAligned : self.class::DEFAULT_VALUE_ALIGNED
  end

end