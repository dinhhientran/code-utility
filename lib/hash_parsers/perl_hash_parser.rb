class PerlHashParser < HashParser

  STRING_QUOTE = %w[" ']
  NULL_VALUES = %w[null NULL]
  COMMA = ','
  COLON = ['=>']
  LEFT_BRACKET = ['(']
  RIGHT_BRACKET = [')']
  LEFT_BRACE = ['(']
  RIGHT_BRACE = [')']
  WHITESPACE = [' ', '\t', '\b', '\n', '\r']
  SYNTAX = [COMMA, COLON, LEFT_BRACKET, RIGHT_BRACKET, LEFT_BRACE, RIGHT_BRACE].flatten

  # regex
  VARIABLE_REGEX = /\A(?:\s*)(\$\w+|\w+)(?:\s*)(.*)/m
  REGEX_REGEX = /\A((?:\w+)?\/.*[^\\]\/)(?:\s*)(.*)/m

  LEX_FUNCTIONS = %w[lexString lexNumber lexBool lexNull lexFunction lexRegex lexVariable lexExpression]

end