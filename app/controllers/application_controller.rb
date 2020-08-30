class ApplicationController < ActionController::Base
  before_action :handle_cookies

  def handle_cookies
    cookies[:theme] = @theme = cookies[:theme].nil? ? 'light' :  cookies[:theme]
  end
end
