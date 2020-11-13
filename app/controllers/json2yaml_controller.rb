class Json2yamlController < ConverterController

  TOOL = 'json2yaml'.freeze

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

    if input[:to] == 'json'
      json_beautifier = CodeBeautifier.getBeautifierClass('json')
      result = json_beautifier.beautify(result, 'json', { :indent_size => 2 })
    end

    render json: { code: result, language: input[:to] }
  rescue Exception => e
    puts e.inspect
    render_error(e.message)
  end

end
