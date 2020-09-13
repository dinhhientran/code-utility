class ApplicationController < ActionController::Base
  before_action :handle_cookies, :set_base_url

  TOOL = nil

  def handle_cookies
    cookies[:theme] = @theme = cookies[:theme].nil? ? 'light' :  cookies[:theme]
  end

  def set_base_url
    gon.base_url = self::class::BASE_URL
  end

  def render_error(message, status = 500)
    if status == 500
      render json: {error: message}, :status => status
    elsif status == 404
      redirect_to '/404.html' and return
    end
  end

end
