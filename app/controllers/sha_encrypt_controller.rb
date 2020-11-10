require 'digest'

class ShaEncryptController < ToolController

  TOOL = 'sha_encrypt'.freeze

  def get_params
    input = params.require(:input).permit(:string, :type, :action)
    { input: input, tool: TOOL }
  end

  def encrypt
    input = get_params[:input]

    if input[:type] == 'sha1'
      result = Digest::SHA1.hexdigest(input[:string])
    elsif input[:type] == 'sha256'
      result = Digest::SHA2.new(256).hexdigest(input[:string])
    elsif input[:type] == 'sha384'
      result = Digest::SHA2.new(384).hexdigest(input[:string])
    elsif input[:type] == 'sha512'
      result = Digest::SHA2.new(512).hexdigest(input[:string])
    end

    render json: { result: result }
  rescue Exception => e
    render_error(e.message)
  end

end
