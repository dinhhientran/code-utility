require "base64"
require "base58"
require "base32"

class Base64EncodeController < ToolController

  TOOL = 'base64_encode'.freeze

  def get_params
    input = params.require(:input).permit(:string, :type, :action)
    { input: input, tool: TOOL }
  end

  def encode
    input = get_params[:input]

    result = Base64.encode64(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

  def decode
    input = get_params[:input]

    result = Base64.decode64(input[:string])

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

end
