class HashController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index

  end

  def beautify
    language = params.fetch(:language)
    source = params.fetch(:hash)

    hashParser = nil

    case language
    when 'PHP'
      hashParser = PhpHashParser.new(source)
    when 'Ruby'
      hashParser = RubyHashParser.new(source)
    when 'Javascript/Typescript'
      hashParser = JsHashParser.new(source)
    when 'Python'
      hashParser = PythonHashParser.new(source)
    when 'Perl'
      hashParser = PerlHashParser.new(source)
    when 'Go'
      hashParser = GoHashParser.new(source)
    when 'Groovy'
      hashParser = GroovyHashParser.new(source)
    when 'Swift'
      hashParser = SwiftHashParser.new(source)
    end

    raise StandardError.new("Language is not given or not supported!") if hashParser.nil?
    raise StandardError.new("Input is not valid!") if !hashParser.isValidHash?

    render json: {hash: hashParser.beautify}
  end
end