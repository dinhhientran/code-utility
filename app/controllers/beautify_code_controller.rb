class BeautifyCodeController < ShareController

  TOOL = 'beautify_code'
  BASE_URL = 'http://localhost:3000/beautify_code/'

  skip_before_action :verify_authenticity_token

  def get_params
    input = params.require(:input).permit(:language, :rules)
    {input: input, tool: TOOL}
  end

  def beautify
    language = params[:language]
    code = params[:code].strip
    rules = params[:rules]

    if !code.empty?
      case language
      when 'php'
        result = PhpCodeBeautifier.beautify(code, rules)
      end

      render json: {code: result}
    else
      raise ArgumentError.new("Code cannot be empty!")
    end
  end

end
