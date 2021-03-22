class Tools::AlignHashController < Tools::ToolController
  TOOL = 'align_hash'.freeze

  def get_params
    input = params.require(:input).permit(:language, :hash, :indent, :valueAligned)
    { input: input, tool: TOOL }
  end

  def beautify
    language = params.require(:language)
    source = params.require(:hash)
    indent = params.require(:indent)
    valueAligned = params.require(:valueAligned)

    raise ArgumentError, 'Language cannot be empty!' if language.nil? || language.empty?
    raise ArgumentError, 'Source input cannot be empty!' if source.nil? || source.empty?

    parser = HashParser.getHashParserClass(language)
    beautifier = HashBeautifier.getBeautifierInstance(language)

    raise ArgumentError, 'Language is not given or not supported!' if parser.nil? || beautifier.nil?

    hash = parser.parse(source.strip)

    raise StandardError, 'Cannot parse the input into align_hash!' if hash.nil? || hash.is_a?(String)

    beautifier.setHash(hash)
    beautifier.setIndent(indent.to_i) unless indent.nil?
    beautifier.setValueAligned(valueAligned == '1') unless valueAligned.nil?

    render json: { hash: beautifier.beautify }
  rescue Exception => e
    render_error(e.message)
  end
end
