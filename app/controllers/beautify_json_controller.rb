class BeautifyJsonController < ToolController
  TOOL = 'beautify_json'.freeze

  def get_params
    input = params.require(:input).permit(:json, :indent)
    { input: input, tool: TOOL }
  end

  def beautify
    input = get_params[:input]

    code = input[:json].strip
    indent = input[:indent].to_i
    options = { indent_size: indent }

    raise ArgumentError.new('Code cannot be empty!') unless !code.empty?

    beautifier = CodeBeautifier.getBeautifierClass('json')

    raise StandardError.new('No beautifiers found for JSON') if beautifier.nil?

    result = beautifier.beautify(code, nil, options)

    render json: { json: result }
  rescue Exception => e
    render_error(e.message)
  end
end
