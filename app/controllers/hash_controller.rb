class HashController < ApplicationController

  TOOL = 'align_hash'

  skip_before_action :verify_authenticity_token

  def get_params
    input = params.require(:input).permit(:language, :hash, :indent, :valueAligned)
    {input: input, tool: TOOL}
  end

  def index
    begin
      reference_number = params[:reference_number]
      version_number = params[:version]

      if !reference_number.nil? and !version_number.nil?
        @share = Share.find_by_reference_number(reference_number)

        raise NotFoundError.new("This share does not exist!") if @share.nil?

        raise NotFoundError.new("Cannot find this share for the Align Hash/Array tool!") if @share.nil? or @share.tool != TOOL

        @version = @share.versions.find_by(:version_number => version_number)

        raise NotFoundError.new("This share does not exist!") if @version.nil?

        gon.reference_number = @share.reference_number
        gon.version = @version.version_number
        gon.input = @version.input
      end

    rescue NotFoundError => e
      render_error(e.message, 404) and return
    rescue Exception => e
      render_error(e.message)
    end
  end

  def beautify
    begin
      language = params.require(:language)
      source = params.require(:hash)
      indent = params.require(:indent)
      valueAligned = params.require(:valueAligned)

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
    rescue Exception => e
      render_error(e.message)
    end
  end
end