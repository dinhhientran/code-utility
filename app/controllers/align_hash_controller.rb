class AlignHashController < ShareController

  TOOL = 'align'
  BASE_URL = 'http://localhost:3000/align_hash/'

  skip_before_action :verify_authenticity_token

  def get_params
    input = params.require(:input).permit(:language, :hash, :indent, :valueAligned)
    {input: input, tool: TOOL}
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

      raise StandardError.new("Cannot parse the input into align_hash!") if hash.nil? or hash.is_a? String

      beautifier.setHash(hash)
      beautifier.setIndent(indent.to_i) if !indent.nil?
      beautifier.setValueAligned(valueAligned == "1") if !valueAligned.nil?

      render json: {hash: beautifier.beautify}
    rescue Exception => e
      render_error(e.message)
    end
  end
end