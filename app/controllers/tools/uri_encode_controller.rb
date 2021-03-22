require 'uri'

class Tools::UriEncodeController < Tools::ToolController

  TOOL = 'uri_encode'.freeze

  def get_params
    input = params.require(:input).permit(:string, :action)
    { input: input, tool: TOOL }
  end

  def encode
    input = get_params[:input]

    result = URI.encode(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

  def decode
    input = get_params[:input]

    result = URI.decode(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

end
