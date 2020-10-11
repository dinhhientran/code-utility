#!/usr/bin/env node

'use strict';

var fs = require('fs');

var HTMLtoJSX = require("@tsuyoshiwada/htmltojsx");

const converter = new HTMLtoJSX({
    createClass: false,
    indent: '  ',
});

var content = fs.readFileSync(process.argv[2],'utf8');

const result = converter.convert(content);

console.log(result);