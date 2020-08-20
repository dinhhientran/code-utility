class RubyHashParser < HashParser

  HASH_REGEX = /^(?:\s*){(.+?)}(?:\s*)$/m
  HASH_WITH_VARIABLE_REGEX = /^(?:\s*)(\w+)(?:\s*)=(?:\s*){(.+?)}(?:\s*)$/m

  ITEM_SPLIT_REGEX = /(?:\s*)(:\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?')(?:\s*)(?:\:|=>)(?:\s*)(:\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?'|.+?)(?:\s*)(?:,?)(?:\s*)/m

  HASH_SYNTAX = "%s{\n%s}\n"
  ITEM_SEPARATOR = ','
  KEY_VALUE_SEPARATOR = '=>'

  def initialize(input = nil)
    super(input)
  end

  protected

  def hashRegex
    HASH_REGEX
  end

  def hashSyntax
    HASH_SYNTAX
  end

  def hashWithVariableRegex
    HASH_WITH_VARIABLE_REGEX
  end

  def itemSplitRegex
    ITEM_SPLIT_REGEX
  end

  def itemSeparator
    ITEM_SEPARATOR
  end

  def keyValueSeparator
    KEY_VALUE_SEPARATOR
  end
end