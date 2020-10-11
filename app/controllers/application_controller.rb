class ApplicationController < ActionController::Base
  before_action :set_urls

  TOOL = nil

  def set_urls
    gon.base_url = 'http://localhost:3000/'
    gon.tool_url = gon.base_url + self.class::TOOL + '/'
  end

  def render_error(message, status = 500)
    if status == 500
      render json: { error: message }, status: status
    elsif status == 404
      redirect_to '/404.html' and return
    end
  end
end
