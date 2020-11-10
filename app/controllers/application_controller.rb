class ApplicationController < ActionController::Base
  before_action :set_urls

  TOOL = nil

  def set_urls
    gon.base_url = ENV['BASE_URL']

    gon.api_url = ENV['BASE_URL'] + controller_name

    unless self.class::TOOL.nil?
      gon.tool_url = ENV[self.class::TOOL.upcase + "_URL"]
    end

    gon.page = controller_name
  end

  def render_error(message, status = 500)
    if status == 500
      render json: { error: message }, status: status
    elsif status == 404
      redirect_to '/404.html' and return
    end
  end
end
