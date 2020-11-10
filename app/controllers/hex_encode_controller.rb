class HexEncodeController < ToolController

  TOOL = 'hex_encode'.freeze

  def get_params
    input = params.require(:input).permit(:string, :action)
    { input: input, tool: TOOL }
  end

  def encode
    input = get_params[:input]

    result = input[:string].each_byte.map { |b| b.to_s(16) }.join

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

  def decode
    input = get_params[:input]

    result = input[:string].scan(/../).map { |x| x.hex.chr }.join

    render json: { result: result, action: input[:action] }
  rescue Exception => e
    render_error(e.message)
  end

end
