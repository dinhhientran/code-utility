#!/usr/bin/python

import sys
import sqlparse

file = sys.argv[1]

with open(file, 'r') as file:
    raw = file.read()

statements = sqlparse.split(raw)

if statements:
    for statement in statements:
        print(sqlparse.format(statement, reindent=True, keyword_case='upper'))
else:
    print(raw)


