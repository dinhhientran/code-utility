class ApplicationController < ActionController::Base
  before_action :handle_cookies

  def handle_cookies
    cookies[:theme] = @theme = cookies[:theme].nil? ? 'light' :  cookies[:theme]
    gon.base_url = 'http://localhost:3000/'
  end

  def render_error(message, status = 500)
    if status == 500
      render json: {error: message}, :status => status
    elsif status == 404
      redirect_to '/404.html' and return
    end
  end

  def get_params; end

  def share
    begin
      params = get_params

      input = params[:input]
      tool = params[:tool]
      share = Share.create({:tool => tool})

      version = Version.create({:share => share, :input => input})

      render :json => {
        :share_id => share.id,
        :reference_number => share.reference_number,
        :version => version.version_number
      }
    rescue Exception => e
      render_error(e.message) and return
    end
  end

  def fork
    begin
      reference_number = params.require(:reference_number)
      share = Share.find_by_reference_number(reference_number)

      raise NotFoundError.new("Cannot find this share") if share.nil?

      params = get_params
      input = params[:input]

      version = Version.create({:share => share, :input => input})

      render :json => {
        :share_id => share.id,
        :reference_number => share.reference_number,
        :version => version.version_number
      }
    rescue NotFoundError => e
      render_error(e.message, 404) and return
    rescue Exception => e
      render_error(e.message)
    end
  end
end
