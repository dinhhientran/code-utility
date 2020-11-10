Rails.application.routes.draw do

  beautify_tools = ['align_hash', 'beautify_code', 'beautify_json']
  convert_tools = ['html2haml', 'html2slim', 'html2jsx', 'html2pug', 'css2scss', 'json2yaml']
  minify_tools = ['minify_html', 'minify_javascript', 'minify_css', 'minify_json', 'minify_sql']
  encode_tools = ['uri_encode', 'html_encode', 'hex_encode', 'base64_encode']
  encrypt_tools = ['md5_encrypt', 'sha_encrypt']

  tools = beautify_tools + convert_tools + minify_tools + encode_tools + encrypt_tools

  root 'home#index'

  get "/:reference_number/:version", to: "tool#redirect_tool", constraints: { version: /\d+/ }

  tools.each do |tool|
    get tool, to: tool + '#index'
    get "/#{tool}/:reference_number/:version", to: "#{tool}#index", constraints: { version: /\d+/ }

    if tool == 'beautify_code'
      get "/#{tool}/:language", to: "#{tool}#index"
    end

    if beautify_tools.include?(tool)
      post "/#{tool}/beautify", to: "#{tool}#beautify"
    end

    if convert_tools.include?(tool)
      post "/#{tool}/convert", to: "#{tool}#convert"
    end

    if minify_tools.include?(tool)
      post "/#{tool}/minify", to: "#{tool}#minify"
    end

    if encode_tools.include?(tool)
      post "/#{tool}/encode", to: "#{tool}#encode"
      post "/#{tool}/decode", to: "#{tool}#decode"
    end

    if encrypt_tools.include?(tool)
      post "/#{tool}/encrypt", to: "#{tool}#encrypt"
    end

    post "/#{tool}/share", to: "#{tool}#share"
    post "/#{tool}/fork", to: "#{tool}#fork"
  end

  post '/file/upload', to: 'file#upload'
  post '/file/download', to: 'file#download'

end
