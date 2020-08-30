class HashController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end

  def beautify
    begin
      language = params.fetch(:language)
      source = params.fetch(:hash)
      indent = params.fetch(:indent)
      valueAligned = params.fetch(:valueAligned)

      raise ArgumentError.new("Language cannot be empty!") if language.nil? or language.empty?
      raise ArgumentError.new("Source input cannot be empty!") if source.nil? or source.empty?

      parser = HashParser.getHashParserClass(language)
      beautifier = HashBeautifier.getBeautifierInstance(language)

      raise ArgumentError.new("Language is not given or not supported!") if parser.nil? or beautifier.nil?

      hash = parser.parse(source.strip)

      raise StandardError.new("Cannot parse the input into hash!") if hash.nil? or hash.is_a? String

      beautifier.setHash(hash)
      beautifier.setIndent(indent.to_i) if !indent.nil?
      beautifier.setValueAligned(valueAligned == "1") if !valueAligned.nil?

      render json: {hash: beautifier.beautify}
    rescue Exception => error
      render json: {error: error.message}, :status => 500
    end
  end
end