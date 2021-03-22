class Users::UserController < ApplicationController
  before_action :verify_authenticity_token
  before_action :authenticate_user!

  def profile
    @recent_shares = current_user.recent_shares
  end

  def update_name
    current_user.full_name = params[:name]
    current_user.save
  end

  def update_avatar
    current_user.update_avatar(params[:avatar].tempfile, params[:avatar].original_filename)
    current_user.save

    render json: {
      avatar_url: polymorphic_url(current_user.avatar),
    }
  rescue Exception => e
    render_error(e.message)
  end

  def add_favorite_tool
    tool = params[:tool]
    current_favorite_tools = current_user.favorite_tools

    message = "Added!"

    if current_favorite_tools.nil?
      current_favorite_tools = [params[:tool]]
    else
      if !current_favorite_tools.include?(tool)
        current_favorite_tools << params[:tool]
      else
        message = "This tool is already in your favorite list!"
      end
    end

    current_user.favorite_tools = current_favorite_tools
    current_user.save

    render json: {
      success: true,
      message: message
    }
  rescue Exception => e
    render_error(e.message)
  end
end