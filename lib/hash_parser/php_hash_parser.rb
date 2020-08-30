class PhpHashParser < HashParser

  COMMA = ','
  COLON = ['=>']
  LEFT_BRACKET = ['array(', '[']
  RIGHT_BRACKET = [')', ']']
  LEFT_BRACE = ['array(', '[']
  RIGHT_BRACE = [')', ']']
  WHITESPACE = [' ', '\t', '\b', '\n', '\r']
  SYNTAX = [COMMA, COLON, LEFT_BRACKET, RIGHT_BRACKET, LEFT_BRACE, RIGHT_BRACE].flatten

  # regex
  VARIABLE_REGEX = /^(?:\s*)(\$\w+|\w+)(?:\s*)(.*)/m
  EXPRESSION_REGEX = /^(?:\s*)([^#{[COMMA, COLON].flatten.join('|')}]+)(?:\s*)(.*)/m

  LEX_FUNCTIONS = %w[lexString lexNumber lexBool lexNull lexFunction lexVariable lexExpression]
end