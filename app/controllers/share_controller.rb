class ShareController < ApplicationController

  before_action :set_gon;

  def set_gon
    gon.tool = self::class::TOOL
  end

  def get_params; end

  def index
    begin
      reference_number = params[:reference_number]
      version_number = params[:version]

      if !reference_number.nil? and !version_number.nil?
        @share = Share.find_by_reference_number(reference_number)

        raise NotFoundError.new("This share does not exist!") if @share.nil?

        raise NotFoundError.new("Cannot find this share!") if @share.nil? or @share.tool != self::class::TOOL

        @version = @share.versions.find_by(:version_number => version_number)

        raise NotFoundError.new("This share does not exist!") if @version.nil?

        gon.reference_number = @share.reference_number
        gon.version = @version.version_number
        gon.input = @version.input
      end

    rescue NotFoundError => e
      render_error(e.message, 404) and return
    rescue Exception => e
      render_error(e.message)
    end
  end

  def share
    begin
      params = get_params

      input = params[:input]
      tool = params[:tool]
      share = Share.create({:tool => tool})

      puts input.inspect

      version = Version.create({:share => share, :input => input})

      render :json => {
          :share_id => share.id,
          :reference_number => share.reference_number,
          :version => version.version_number
      }
    rescue Exception => e
      render_error(e.message) and return
    end
  end

  def fork
    begin
      reference_number = params.require(:reference_number)
      share = Share.find_by_reference_number(reference_number)

      raise NotFoundError.new("Cannot find this share") if share.nil?

      params = get_params
      input = params[:input]

      version = Version.create({:share => share, :input => input})

      render :json => {
          :share_id => share.id,
          :reference_number => share.reference_number,
          :version => version.version_number
      }
    rescue NotFoundError => e
      render_error(e.message, 404) and return
    rescue Exception => e
      render_error(e.message)
    end
  end

end