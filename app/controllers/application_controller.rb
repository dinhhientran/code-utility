class ApplicationController < ActionController::Base
  before_action :set_vars, :fetch_user_recent_tools

  TOOL = nil

  include Pagy::Backend

  def set_vars
    gon.base_url = ENV['BASE_URL']

    gon.api_url = ENV['BASE_URL'] + controller_name

    unless self.class::TOOL.nil?
      gon.tool_url = ENV[self.class::TOOL.upcase + "_URL"]
    end

    @page = gon.page = controller_name
    gon.action = action_name

    gon.github_auth_url = user_github_omniauth_authorize_url
    gon.google_auth_url = user_google_oauth2_omniauth_authorize_url

    if current_user
      gon.current_user = current_user
    end

    @theme = cookies[:theme]
  end

  def fetch_user_recent_tools
    if !current_user.nil?
      favorite_tool_aliases = current_user.favorite_tools.nil? ? [] : current_user.favorite_tools
      @favorite_tools = Tool.where(:alias => favorite_tool_aliases)
      @recent_tools = current_user.recent_tools ? [] : current_user.recent_tools
    end
  end

  def render_error(message, status = 500)
    if status == 500
      render json: { error: message }, status: status
    elsif status == 404
      redirect_to '/404.html' and return
    end
  end
end
