class SitemapController < ApplicationController
  include UrlHelper

  def index
    @records = [
      {
        :loc => ENV['BASE_URL'],
        :lastmod => "2020-11-30".to_date.xmlschema
      },
      {
        :loc => ENV['BASE_URL'] + "releases",
        :lastmod => "2021-04-03".to_date.xmlschema
      },
      {
        :loc => ENV['BASE_URL'] + "users/login",
        :lastmod => "2021-04-03".to_date.xmlschema
      }
    ]

    tools = Tool.all

    tools.each do |tool|
      @records.push({
        :loc => tool_url(tool),
        :lastmod => tool.updated_at.xmlschema
      })
    end

    tags = Tag.all

    tags.each do |tag|
      @records.push({
        :loc => tag_url(tag),
        :lastmod => tag.updated_at.xmlschema
      })
    end

    versions = Version.where('public = true').order('created_at DESC')

    versions.each do |version|
      @records.push({
        :loc => share_link(version, true),
        :lastmod => version.updated_at.xmlschema
      })
    end

    respond_to do |format|
      format.html
      format.xml { render :xml => @records }
    end
  end

end
