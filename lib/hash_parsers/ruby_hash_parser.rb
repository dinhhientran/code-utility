class RubyHashParser < HashParser

  STRING_QUOTE = %w[" ']
  NULL_VALUES = %w[nil]
  COMMA = ','
  COLON = [':', '=>']
  LEFT_BRACKET = ['[']
  RIGHT_BRACKET = [']']
  LEFT_BRACE = ['{']
  RIGHT_BRACE = ['}']
  WHITESPACE = [' ', '\t', '\b', '\n', '\r']
  SYNTAX = [COMMA, COLON, LEFT_BRACKET, RIGHT_BRACKET, LEFT_BRACE, RIGHT_BRACE].flatten

  # regex
  STRING_REGEX = /\A(?:\s*)('.*?[^\\]'|".*?[^\\]")(?:\s*)(.*)/m
  NUMBER_REGEX = /\A(?:\s*)(-?\d+\.?[\d_][eE-]?(?:\d+)?|0[xXbB][0-9a-fA-F]+|\d+|-\d+)(?:\s*)(.*)/m
  BOOL_REGEX = /\A(?:\s*)(true|false|TRUE|FALSE|True|False)(?:\s*)(.*)/m
  NULL_REGEX = /\A(?:\s*)(#{NULL_VALUES.join('|')})(?:\s+?)(.*)/m
  SYMBOL_REGEX = /\A(?:\s*)(:\w+)(?:\s*)(.*)/m
  VARIABLE_REGEX = /\A(?:\s*)(\w+\.\w+|\w+::\w+|@\w+|\$\w+|\w+)(?:\s*)(.*)/m
  REGEX_REGEX = /\A(\/.*[^\\]\/\w*)(?:\s*)(.*)/m
  EXPRESSION_REGEX = /\A(?:\s*)([^#{[COMMA, COLON].flatten.join('|')}]+)(?:\s*)(.*)/m

  LEX_FUNCTIONS = %w[lexString lexNumber lexBool lexNull lexSymbol lexFunction lexRegex lexVariable lexExpression]

end