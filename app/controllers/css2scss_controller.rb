class Css2scssController < ConverterController

  TOOL = 'css2scss'.freeze

  def get_params
    input = params.require(:input).permit(:code, :from, :to)
    { input: input, tool: TOOL }
  end

  def call_convert(input, converter)

    converter.convert(input[:code], {:from => input[:from], :to => input[:to]})

  end

  def convert
    input = get_params[:input]

    validate_input(input)

    converter = get_converter

    result = call_convert(input, converter)

    if input[:to] == 'css'
      css_beautifier = CodeBeautifier.getBeautifierClass('css')
      result = css_beautifier.beautify(result, 'css', nil)
    end

    render json: { code: result, language: input[:to] }
  rescue Exception => e
    render_error(e.message)
  end

end
