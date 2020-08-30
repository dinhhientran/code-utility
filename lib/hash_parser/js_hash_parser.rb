class JsHashParser < HashParser

  COMMA = ','
  COLON = [':']
  LEFT_BRACKET = ['[']
  RIGHT_BRACKET = [']']
  LEFT_BRACE = ['{']
  RIGHT_BRACE = ['}']
  WHITESPACE = [' ', '\t', '\b', '\n', '\r']
  SYNTAX = [COMMA, COLON, LEFT_BRACKET, RIGHT_BRACKET, LEFT_BRACE, RIGHT_BRACE].flatten

  # regex
  VARIABLE_REGEX = /^(?:\s*)(\w+\.\w+|\$\w+|\w+)(?:\s*)(.*)/m

  LEX_FUNCTIONS = %w[lexString lexNumber lexBool lexNull lexFunction lexRegex lexVariable lexExpression]

end