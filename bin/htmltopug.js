#!/usr/bin/env node

'use strict';

var fs = require('fs');

const html2pug = require('html2pug')

var content = fs.readFileSync(process.argv[2],'utf8');

var result = html2pug(content, { tabs: true })

console.log(result);