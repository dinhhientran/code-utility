class BeautifyCodeController < ShareController

  TOOL = 'beautify_code'
  BASE_URL = 'http://localhost:3000/beautify_code/'

  skip_before_action :verify_authenticity_token

  def get_params
    language = params[:input][:language]
    case language
    when 'php'
      input = params.require(:input).permit(:language, :code, :options => [:rules => []])
    when 'c', 'cpp', 'objectiveC'
      input = params.require(:input).permit(:language, :code, :options => [:style])
    when 'csharp', 'coldfusion', 'go', 'graphql', 'html', 'jsx', 'java',
         'javascript', 'typescript', 'less', 'css', 'scss', 'python', 'ejs', 'htmlerb', 'xml', 'svg', 'python'
      input = params.require(:input).permit(:language, :code)
    end
    {input: input, tool: TOOL}
  end

  def beautify
    begin
      input = get_params[:input]

      language = input[:language]
      code = input[:code].strip
      options = input[:options]

      if !code.empty?
        beautifier = CodeBeautifier.getBeautifierClass(language)

        raise StandardError.new("No beautifiers found for the given language") if beautifier.nil?

        result = beautifier.beautify(code, language, options)

        render json: {code: result}
      else
        raise ArgumentError.new("Code cannot be empty!")
      end
    rescue Exception => e
      puts e.full_message.inspect
      render_error(e.message)
    end
  end

end
