require 'uri'

module UrlHelper

  def sub_code(version)
    key = "code"
    key = "json" if version.share.tool == "beautify_json"
    key = "string" if ["uri_encode", "base64_encode" "hex_encode", "html_encode", "sha_encrypt"].include?(version.share.tool)
    html_escape(version.input[key].slice(0, 200))
  end

  def share_link(version, slug = false)
    url = ENV['BASE_URL'] + version.share.reference_number.to_s + '/' + version.version_number.to_s
    if slug && !version.name.nil? && !version.name.blank?
      url += "/" + version.name.parameterize
    end
    url
  end

  def tag_url(tag)
    ENV['BASE_URL'] + 'tag/' + tag.slug
  end

  def tool_url(tool)
    ENV[tool.alias.upcase + '_URL']
  end

  def host_from_url(url)
    URI.parse(url).host
  end

end
