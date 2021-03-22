class Users::SharesController < ApplicationController
  before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @recent_shares = current_user.recent_shares
    if !params[:keyword].blank?
      @keyword = params[:keyword].strip.downcase
      shares = current_user.versions.joins('inner join shares on shares.id = versions.share_id').where("LOWER(shares.reference_number) like :keyword OR LOWER(versions.name) like :keyword OR LOWER(versions.input ->> 'code') like :keyword", keyword: "%" + @keyword + "%")
    else
      shares = current_user.versions
    end
    @pagy, @shares = pagy(shares.order('versions.created_at DESC'))
  end

  def delete_share
    version_id = params[:version_id]
    version = Version.find(version_id)

    if !version.nil? && version.user_id == current_user.id
      share = version.share
      version.destroy
      share.destroy
    else
      raise StandardError.new("Could not find version #{version_id} of current user")
    end

    render json: {
      success: true
    }
  rescue Exception => e
    render_error(e.message)
  end
end