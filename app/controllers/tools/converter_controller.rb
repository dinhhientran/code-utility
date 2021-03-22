class Tools::ConverterController < Tools::ToolController

  def get_params
    input = params.require(:input).permit(:code)
    { input: input, tool: self.class::TOOL }
  end

  def convert
    input = get_params[:input]

    validate_input(input)

    converter = get_converter

    result = call_convert(input, converter)

    render json: { code: result }
  rescue Exception => e
    render_error(e.message)
  end

  def call_convert(input, converter)

    converter.convert(input[:code].strip, nil)
  end

  def validate_input(input)

  end

  def get_converter
    converter = CodeConverter.getConverterClass(self.class::TOOL)

    raise StandardError, "No converters found for #{self.class::TOOL}" if converter.nil?

    converter
  end
end
