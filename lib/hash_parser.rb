class HashParser

  def initialize(input = nil)
    raise ArgumentError.new("Input cannot be null") if input.nil?
    @input = !input.nil? ? input.strip : input
    @isValid = (@input.match?(hashRegex) or @input.match?(hashWithVariableRegex))
    parse if @isValid
  end

  def beautify
    raise StandardError.new("Hash input is not valid") if !@isValid
    items = @hash.fetch(:items)
    varName = @hash.fetch(:varName)
    type = @hash.include?(:type) ? @hash.fetch(:type) : nil
    longestKey = items.keys.map { |key| key.length }.max
    if isKeyFollowBySeparator
      lineItems = items.map { |key, value| lineFormatKeyFollowBySeparator(key, value, longestKey) }
    else
      lineItems = items.map { |key, value| lineFormat(key, value, longestKey) }
    end

    if !type.nil?
      params = [!varName.nil? ? "#{varName.strip} #{assignOperator} " : '', type, lineItems.join("#{itemSeparator}\n")]
    else
      params = [!varName.nil? ? "#{varName.strip} #{assignOperator} " : '', lineItems.join("#{itemSeparator}\n")]
    end

    (lineItems.empty? ? "#{hashSyntax.gsub(/\s*/m, '')}\n" : hashSyntax) % params
  end

  def isValidHash?
    @isValid
  end

  def setKeyFollowBySeparator(value)
    @keyFollowBySeparator = value
  end

  def isKeyFollowBySeparator
    @keyFollowBySeparator
  end

  def setKeyValueSeparator(separator)
    @keyValueSeparator = separator
  end

  def setIndent(indent)
    @indent = indent
  end

  protected

  def hashRegex; end
  def hashSyntax; end
  def hashWithVariableRegex; end
  def itemSplitRegex; end
  def itemSeparator; end
  def keyValueSeparator; end
  def indent; end

  def assignOperator
    '='
  end

  def lineFormat(key, value, longestKey)
    "#{indent}#{key.to_s}#{whiteSpace(longestKey - key.length)}#{keyValueSeparator == "=>" ? " " : ""}#{keyValueSeparator} #{value}"
  end

  def lineFormatKeyFollowBySeparator(key, value, longestKey)
    "#{indent}#{key.to_s}#{keyValueSeparator}#{whiteSpace(longestKey - key.length)} #{value}"
  end

  protected

  def whiteSpace(n)
    Array.new(n).map{|w| " "}.join
  end

  def parse
    name = nil
    hash = (@input.scan(hashRegex).flatten || [[]]).at(0)
    if hash.nil? and !(split = (@input.scan(hashWithVariableRegex).flatten || [])).empty?
      name = split.at(0)
      hash = split.at(1)
    end
    items = hash.scan(itemSplitRegex)
    @hash = {:varName => name, :items => items.to_h}
  end

end