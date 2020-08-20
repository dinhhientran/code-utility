class HashParser

  def initialize(input = nil)
    raise ArgumentError.new("Input cannot be null") if input.nil?
    @input = !input.nil? ? input.strip : input
    @isValid = @input.match?(hashRegex) or @input.match?(hashWithVariableRegex)
    parse if @isValid
  end

  def beautify
    raise StandardError.new("Hash input is not valid") if !@isValid
    items = @hash.fetch(:items)
    varName = @hash.fetch(:varName)
    longestKey = items.keys.map { |key| key.length }.max
    lineItems = items.map { |key, value| "#{key.to_s}#{whiteSpace(longestKey - key.length)}#{keyValueSeparator} #{value}" }
    hashSyntax % [!varName.nil? ? "#{varName} = " : '', lineItems.join("#{itemSeparator}\n")]
  end

  def isValidHash?
    @isValid
  end

  protected

  def hashRegex; end
  def hashSyntax; end
  def hashWithVariableRegex; end
  def itemSplitRegex; end
  def itemSeparator; end
  def keyValueSeparator; end

  private

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
    puts items
    @hash = {:varName => name, :items => items.to_h}
  end

end