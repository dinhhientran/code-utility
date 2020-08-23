class PerlHashParser < HashParser

  HASH_REGEX = /^(?:\s*)\((.*)\)(?:\s*)(?:;?)(?:\s*)$/m
  HASH_WITH_VARIABLE_REGEX = /^(?:\s*)(.*)(?:\s*)=(?:\s*)\((.*)\)(?:\s*)(?:;?)(?:\s*)$/m

  ITEM_SPLIT_REGEX = /(?:\s*)(-\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?')(?:\s*)(?:\:|=>)(?:\s*)(:\w+|\d|[0-9]\.[0-9]+|true|false|".+?"|'.+?'|.+?)(?:\s*)(?:,?)(?:\s*)/m

  HASH_SYNTAX = "%s(\n%s\n);\n"
  ITEM_SEPARATOR = ','
  KEY_VALUE_SEPARATOR = '=>'
  INDENT = '    '

  def initialize(input = nil)
    super(input)
  end

  protected

  def lineFormatKeyFollowBySeparator(key, value, longestKey)
    "#{indent}#{key.to_s} #{keyValueSeparator}#{whiteSpace(longestKey - key.length)} #{value}"
  end

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
end