class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def github
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    puts request.env["omniauth.auth"].inspect
    @user = User.from_omniauth_github(request.env["omniauth.auth"])
    if @user.persisted?
      sign_in @user, event: :authentication #this will throw if @user is not activated
    end

    render "users/omniauth_callbacks/callback", :layout => false
  end

  def google_oauth2
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth_google_oauth2(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in @user, event: :authentication #this will throw if @user is not activated
    end

    render "users/omniauth_callbacks/callback", :layout => false
  end
end