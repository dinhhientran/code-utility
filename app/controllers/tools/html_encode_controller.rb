class Tools::HtmlEncodeController < Tools::ToolController

  TOOL = 'html_encode'.freeze

  def get_params
    input = params.require(:input).permit(:string, :action)
    { input: input, tool: TOOL }
  end

  def encode
    input = get_params[:input]

    result = CGI::escapeHTML(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

  def decode
    input = get_params[:input]

    result = CGI::unescape_html(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

end
