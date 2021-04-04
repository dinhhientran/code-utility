Rails.application.routes.draw do

  beautify_tools = ['align_hash', 'beautify_code', 'beautify_json']
  convert_tools = ['html2haml', 'html2slim', 'html2jsx', 'html2pug', 'css2scss', 'json2yaml']
  minify_tools = ['minify_html', 'minify_javascript', 'minify_css', 'minify_json', 'minify_sql']
  encode_tools = ['uri_encode', 'html_encode', 'hex_encode', 'base64_encode']
  encrypt_tools = ['md5_encrypt', 'sha_encrypt']

  tools = beautify_tools + convert_tools + minify_tools + encode_tools + encrypt_tools

  root 'home#index'

  get "/:reference_number/:version", to: "tools/tool#redirect_tool", constraints: { version: /\d+/ }

  tools.each do |tool|
    get tool, to: 'tools/' + tool + '#index'
    get "#{tool}/:reference_number/:version", to: "tools/#{tool}#index", constraints: { version: /\d+/ }

    if tool == 'beautify_code'
      get "/#{tool}/:language", to: "tools/#{tool}#index"
    end

    if beautify_tools.include?(tool)
      post "/#{tool}/beautify", to: "tools/#{tool}#beautify"
    end

    if convert_tools.include?(tool)
      post "/#{tool}/convert", to: "tools/#{tool}#convert"
    end

    if minify_tools.include?(tool)
      post "/#{tool}/minify", to: "tools/#{tool}#minify"
    end

    if encode_tools.include?(tool)
      post "/#{tool}/encode", to: "tools/#{tool}#encode"
      post "/#{tool}/decode", to: "tools/#{tool}#decode"
    end

    if encrypt_tools.include?(tool)
      post "/#{tool}/encrypt", to: "tools/#{tool}#encrypt"
    end

    post "/#{tool}/share", to: "tools/#{tool}#share"
    post "/#{tool}/fork", to: "tools/#{tool}#fork"
  end

  post '/file/upload', to: 'file#upload'
  post '/file/download', to: 'file#download'

  devise_for :users,
       :controllers => {
         :omniauth_callbacks => "users/omniauth_callbacks",
         :sessions => "users/sessions"
       },
       :path_names => {
         :sign_in => 'login',
         :sign_out => 'logout'
       } do
    match '/login' => "devise/sessions#new"
  end

  get "user/profile", to: "users/user#profile"
  get "user/shares", to: "users/shares#index"
  delete "users/shares/delete", to: "users/shares#delete_share"

  post "user/update_name", to: "users/user#update_name"
  post "user/update_avatar", to: "users/user#update_avatar"

  put "user/add_favorite_tool", to: "users/user#add_favorite_tool"

  get "/tag/:slug", to: "tag#index", constraints: {slug: /[a-z0-9]+(?:-[a-z0-9]+)*/}

  get "/releases", to: "releases#index"

  get "/sitemap", to: "sitemap#index"

  get "/privacy", to: "privacy#index"

  get "/terms", to: "terms#index"

end
