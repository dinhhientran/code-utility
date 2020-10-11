class ToolController < ApplicationController

  before_action :set_gon, :handle_cookies, :set_language

  skip_before_action :verify_authenticity_token

  def set_gon
    @tool = gon.tool = self.class::TOOL
  end

  def handle_cookies
    cookies[:theme] = @theme = cookies[:theme].nil? ? 'dark' : cookies[:theme]

    unless self.class::TOOL.nil?
      if cookies[(self.class::TOOL + '_showSampleCode').to_sym].nil?
        cookies[(self.class::TOOL + '_showSampleCode').to_sym] = @showSampleCode = 'true'
      else
        cookies[(self.class::TOOL + '_showSampleCode').to_sym] = @showSampleCode = cookies[(self.class::TOOL + '_showSampleCode').to_sym]
      end
    end
  end

  def set_language
    gon.language = params[:language] if params[:language]
  end

  def get_params; end

  def index
    reference_number = params[:reference_number]
    version_number = params[:version]

    if !reference_number.nil? && !version_number.nil?
      @share = Share.find_by_reference_number(reference_number)

      raise NotFoundError, 'This share does not exist!' if @share.nil?

      raise NotFoundError, 'Cannot find this share!' if @share.nil? || (@share.tool != self.class::TOOL)

      @version = @share.versions.find_by(version_number: version_number)

      raise NotFoundError, 'This share does not exist!' if @version.nil?

      gon.reference_number = @share.reference_number
      gon.version = @version.version_number
      gon.input = @version.input
    end
  rescue NotFoundError => e
    render_error(e.message, 404) and return
  rescue Exception => e
    render_error(e.message)
  end

  def share
    params = get_params

    input = params[:input]
    tool = params[:tool]
    share = Share.create({ tool: tool })

    puts input.inspect

    version = Version.create({ share: share, input: input })

    render json: {
      share_id: share.id,
      reference_number: share.reference_number,
      version: version.version_number
    }
  rescue Exception => e
    render_error(e.message) and return
  end

  def fork
    reference_number = params.require(:reference_number)
    share = Share.find_by_reference_number(reference_number)

    raise NotFoundError, 'Cannot find this share' if share.nil?

    params = get_params
    input = params[:input]

    version = Version.create({ share: share, input: input })

    render json: {
      share_id: share.id,
      reference_number: share.reference_number,
      version: version.version_number
    }
  rescue NotFoundError => e
    render_error(e.message, 404) and return
  rescue Exception => e
    render_error(e.message)
  end
end
