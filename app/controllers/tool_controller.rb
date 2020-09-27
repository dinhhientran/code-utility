class ToolController < ApplicationController

  BASE_URL = 'http://localhost:3000/tool/'

  skip_before_action :verify_authenticity_token

  def upload

    begin
      content = File.read(params[:file].tempfile)
      extension = File.extname(params[:file].tempfile)

      render :json => {
          :content => content.strip,
          :fileName => params[:file].original_filename,
          :extension => extension
      }
    rescue Exception => e
      render_error(e.message)
    end
  end

  def download
    begin
      code = params[:code]
      fileName = params[:fileName]
      extension = File.extname(params[:fileName])
      mimeType = Rack::Mime.mime_type(extension)

      send_data code, :filename => fileName, :type => mimeType, :disposition => "download"
    rescue Exception => e
      render_error(e.message)
    end
  end
end