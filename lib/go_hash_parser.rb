class GoHashParser < HashParser

  HASH_REGEX = /^(?:\s*)(?:(map\[\w+\]\w+)?)(?:\s*){(.*)}(?:\s*)$/m
  HASH_WITH_VARIABLE_REGEX = /^(?:\s*)(\w+)(?:\s*):=(?:\s*)((?:map\[\w+\]\w+)?)(?:\s*){(?:\s*)(.*)(?:\s*)}(?:\s*)$/m

  ITEM_SPLIT_REGEX = /(?:\s*)(:\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?')(?:\s*)(?:\:)(?:\s*)(:\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?'|.+?)(?:\s*)(?:,?)(?:\s*)/m

  HASH_SYNTAX = "%s%s{\n%s\n}\n"
  ITEM_SEPARATOR = ','
  KEY_VALUE_SEPARATOR = ':'
  INDENT = '  '

  def initialize(input = nil)
    super(input)
  end

  protected

  def hashRegex
    HASH_REGEX
  end

  def hashWithVariableRegex
    HASH_WITH_VARIABLE_REGEX
  end

  def hashSyntax
    HASH_SYNTAX
  end

  def itemSplitRegex
    ITEM_SPLIT_REGEX
  end

  def itemSeparator
    ITEM_SEPARATOR
  end

  def keyValueSeparator
    @keyValueSeparator || KEY_VALUE_SEPARATOR
  end

  def indent
    @indent || INDENT
  end

  def assignOperator
    ':='
  end

  def parse
    split = (@input.scan(hashRegex).flatten || [[]])
    if !split.empty?
      @hash = {:varName => nil, :type => split.at(0), :items => split.at(1).scan(itemSplitRegex).to_h}
    else
      split = (@input.scan(hashWithVariableRegex).flatten || [[]])
      @hash = {:varName => split.at(0), :type => split.at(1), :items => split.at(2).scan(itemSplitRegex).to_h}
    end
  end

end