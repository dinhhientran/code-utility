require 'digest'

class Tools::Md5EncryptController < Tools::ToolController

  TOOL = 'md5_encrypt'.freeze

  def get_params
    input = params.require(:input).permit(:string)
    { input: input, tool: TOOL }
  end

  def encrypt
    input = get_params[:input]

    result = Digest::MD5.hexdigest(input[:string])

    render json: { result: result }
  rescue Exception => e
    render_error(e.message)
  end

end
