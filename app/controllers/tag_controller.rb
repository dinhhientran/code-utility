class TagController < ApplicationController

  def index
    @page = 'tag'
    @tag = Tag.find_by_slug(params[:slug])
    raise NotFoundError, 'This tag does not exist!' if @tag.nil?

    @tools = Tool.tools_by_tag(params[:slug])

  rescue NotFoundError => e
    render_error(e.message, 404) and return
  end

end
