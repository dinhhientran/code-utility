class Tools::MinifyController < Tools::ToolController

  def get_params
    input = params.require(:input).permit(:code)
    { input: input, tool: self.class::TOOL }
  end

  def minify
    input = get_params[:input]

    validate_input(input)

    minifier = get_minifier

    result = call_minify(input, minifier)

    render json: { code: result }
  rescue Exception => e
    render_error(e.message)
  end

  def call_minify(input, minifier)

    minifier.minify(input[:code].strip, nil)
  end

  def validate_input(input)

  end

  def get_minifier
    minifier = CodeMinifier.getMinifierClass(self.class::TOOL)

    raise StandardError, "No minifiers found for #{self.class::TOOL}" if minifier.nil?

    minifier
  end

end
