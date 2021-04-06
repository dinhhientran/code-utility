module ApplicationHelper
  include Pagy::Frontend

  def javascript_pack_name(is_tool, page)
    !is_tool.nil? && is_tool ? (page == 'beautify_json' ? 'beautify_json' : 'tool') : 'page'
  end

  def current_host_url(page, is_tool)
    ENV[(is_tool ? page.upcase : 'BASE') + "_URL"]
  end

  def i18n(page, tag, locale)
    I18n.t('page.' + page + '.' + locale) + (!tag.nil? ? " \"%s\"" % tag.slug : "")
  end
end
