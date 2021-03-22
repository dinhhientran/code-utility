# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
#
# Tool.create(:name => 'Align Hash/Array', :alias => 'align_hash', :description => 'Align items in nested Hash/Array for more readable, proper indentation')
# Tool.create(:name => 'Beautify JSON', :alias => 'beautify_json', :description => 'Convert inline/unreadable JSON to well formatted code')
# Tool.create(:name => 'Beautify Code', :alias => 'beautify_code', :description => 'Beautify/format code using conventions, support many popular languages')
# Tool.create(:name => 'Beautify JavaScript', :alias => 'beautify_js', :description => 'Convert inline/unreadable JavaScript to well formatted code')
# Tool.create(:name => 'Beautify HTML', :alias => 'beautify_html', :description => 'Convert inline/unreadable HTML to well formatted code')
# Tool.create(:name => 'Beautify SQL', :alias => 'beautify_sql', :description => 'Convert inline/unreadable SQL to well formatted code')
# Tool.create(:name => 'HTML to HAML', :alias => 'html2haml', :description => 'Convert HTML/ERB to HAML template code')
# Tool.create(:name => 'HTML to Slim', :alias => 'html2slim', :description => 'Convert HTML/ERB to Slim template code')
# Tool.create(:name => 'HTML to JSX', :alias => 'html2jsx', :description => 'Convert HTML to JSX template code')
# Tool.create(:name => 'HTML to Pug', :alias => 'html2pug', :description => 'Convert HTML to Pug template code')
# Tool.create(:name => 'CSS to SCSS/Sass', :alias => 'css2scss', :description => 'Convert CSS to SCSS/Sass code or vice versa')
# Tool.create(:name => 'JSON to YAML', :alias => 'json2yaml', :description => 'Convert JSON to YAML or vice versa')
# Tool.create(:name => 'Minify HTML', :alias => 'minify_html', :description => 'Convert multi line HTML to runnable inline HTML code')
# Tool.create(:name => 'Minify JavaScript', :alias => 'minify_js', :description => 'Convert multi line JavaScript to runnable inline JavaScript code')
# Tool.create(:name => 'Minify CSS', :alias => 'minify_css', :description => 'Convert multi line CSS to runnable inline CSS code')
# Tool.create(:name => 'Minify JSON', :alias => 'minify_json', :description => 'Convert multi line JSON to parsable inline JSON code')
# Tool.create(:name => 'Minify SQL', :alias => 'minify_sql', :description => 'Convert multi line SQL to runnable inline SQL code')
# Tool.create(:name => 'URI Encode/Decode', :alias => 'uri_encode', :description => 'Encode/Decode an URI using URI Encode algorithm')
# Tool.create(:name => 'HTML Encode/Decode', :alias => 'html_encode', :description => 'Convert all applicable characters to HTML entities or vice versa')
# Tool.create(:name => 'Hex Encode/Decode', :alias => 'hex_encode', :description => 'Encode/Decode a string using Hex algorithm')
# Tool.create(:name => 'Base64 Encode/Decode', :alias => 'base64_encode', :description => 'Encode/Decode a string using Base64 algorithm')
# Tool.create(:name => 'MD5 Encrypt', :alias => 'md5_encrypt', :description => 'Encrypt a string using MD5 algorithm')
# Tool.create(:name => 'SHA Encrypt', :alias => 'sha_encrypt', :description => 'Encrypt a string using SHA-1, SHA-256, SHA-384 or SHA-512 algorithm')
#
# # Tags for tool types
# Tag.create(:name => "beautify code", :slug => 'beautify-code')
# Tag.create(:name => "convert code", :slug => 'convert-code')
# Tag.create(:name => "minify code", :slug => 'minify-code')
# Tag.create(:name => "compress code", :slug => 'compress-code')
# Tag.create(:name => "template converter", :slug => 'template-converter')
# Tag.create(:name => "css converter", :slug => 'css-converter')
# Tag.create(:name => "encoder", :slug => "encoder")
# Tag.create(:name => "decoder", :slug => "decoder")
# Tag.create(:name => "encrypter", :slug => "encrypter")
#
# # Tag for languages
# Tag.create(:name => "java", :slug => 'java')
# Tag.create(:name => "php", :slug => 'php')
# Tag.create(:name => "c", :slug => 'c')
# Tag.create(:name => "c++", :slug => 'c-plus-plus')
# Tag.create(:name => "c#", :slug => 'c-sharp')
# Tag.create(:name => "ruby", :slug => 'ruby')
# Tag.create(:name => "python", :slug => 'python')
# Tag.create(:name => "perl", :slug => 'perl')
# Tag.create(:name => "html", :slug => 'html')
# Tag.create(:name => "json", :slug => 'json')
# Tag.create(:name => "sql", :slug => 'sql')
# Tag.create(:name => "javascript", :slug => 'javascript')
# Tag.create(:name => "javascript template", :slug => 'javascript-template')
# Tag.create(:name => "typescript", :slug => 'typescript')
# Tag.create(:name => "go", :slug => 'go')
# Tag.create(:name => "graphql", :slug => 'graphql')
# Tag.create(:name => "css", :slug => 'css')
# Tag.create(:name => "scss", :slug => 'scss')
# Tag.create(:name => "sass", :slug => 'sass')
# Tag.create(:name => "less", :slug => 'less')
# Tag.create(:name => "yaml", :slug => 'yaml')
# Tag.create(:name => "jsx", :slug => 'jsx')
# Tag.create(:name => "pug", :slug => 'pug')
# Tag.create(:name => "xvg", :slug => 'xvg')
# Tag.create(:name => "xml", :slug => 'xml')
# Tag.create(:name => "erb", :slug => 'erb')
# Tag.create(:name => "haml", :slug => 'haml')
# Tag.create(:name => "slim", :slug => 'slim')
# Tag.create(:name => "uri encode/decode", :slug => "uri-encode-decode")
# Tag.create(:name => "html encode/decode", :slug => "html-encode-decode")
# Tag.create(:name => "hex encode/decode", :slug => "hex-encode-decode")
# Tag.create(:name => "base64 encode/decode", :slug => "base64-encode-decode")
# Tag.create(:name => "base64", :slug => "base64")
# Tag.create(:name => "md5", :slug => "md5")
# Tag.create(:name => "sha-1", :slug => "sha-1")
# Tag.create(:name => "sha-256", :slug => "sha-256")
# Tag.create(:name => "sha-384", :slug => "sha-384")
# Tag.create(:name => "sha-512", :slug => "sha-512")
#
# # Tag for framework
# Tag.create(:name => "rails", :slug => 'rails')
# Tag.create(:name => "reactjs", :slug => 'reactjs')
# Tag.create(:name => "bootstrap", :slug => 'bootstrap')
#
#
# TagRelationship.create(:object_id => Tool.find_by_alias('align_hash').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_json').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_json').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('json').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('javascript').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('typescript').id)
#

TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('javascript').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('typescript').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('java').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('php').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('ruby').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('c').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('c-plus-plus').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('c-sharp').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('python').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('perl').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('css').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sql').id)
TagRelationship.create(:object_id => Tool.find_by_alias('beautify_code').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('go').id)

#
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_html').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_html').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_sql').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('beautify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('beautify_sql').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sql').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('rails').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('template-converter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('haml').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2haml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('erb').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('rails').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('template-converter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('slim').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2slim').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('erb').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('reactjs').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('template-converter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('javascript-template').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2jsx').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('javascript').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('html2pug').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2pug').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('pug').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2pug').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('template-converter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html2pug').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('css2scss').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('css').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('css2scss').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('scss').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('css2scss').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sass').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('css2scss').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('css-converter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('css2scss').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('json2yaml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('json').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('json2yaml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('yaml').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('json2yaml').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('convert-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_html').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_html').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('minify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_html').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('compress-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('javascript').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('typescript').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('minify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_js').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('compress-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_css').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('css').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_css').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('scss').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_css').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('minify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_css').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('compress-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_json').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('json').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_json').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('minify-code').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('minify_json').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('compress-code').id)
#
TagRelationship.create(:object_id => Tool.find_by_alias('minify_sql').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sql').id)
TagRelationship.create(:object_id => Tool.find_by_alias('minify_sql').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('minify-code').id)
TagRelationship.create(:object_id => Tool.find_by_alias('minify_sql').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('compress-code').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('uri_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('uri-encode-decode').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('uri_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encoder').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('uri_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('decoder').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('html_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html-encode-decode').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encoder').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('decoder').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('html_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('html').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('hex_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('hex-encode-decode').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('hex_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encoder').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('base64_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('base64-encode-decode').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('base64_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encoder').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('base64_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('decoder').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('base64_encode').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('base64').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('md5_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encrypter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('md5_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('md5').id)
#
# TagRelationship.create(:object_id => Tool.find_by_alias('sha_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('encrypter').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('sha_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sha-1').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('sha_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sha-256').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('sha_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sha-384').id)
# TagRelationship.create(:object_id => Tool.find_by_alias('sha_encrypt').id, :object_type => 'tool', :tag_id => Tag.find_by_slug('sha-512').id)
#
#
#
