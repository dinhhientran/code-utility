class ToolController < ApplicationController

  BASE_URL = 'http://localhost:3000/tool/'

  skip_before_action :verify_authenticity_token

  def upload

    begin
      content = File.read(params[:file].tempfile)
      extension = File.extname(params[:file].tempfile)

      render :json => {
          :content => content.strip,
          :extension => extension
      }
    rescue Exception => e
      render_error(e.message)
    end
  end

  def download

  end
end