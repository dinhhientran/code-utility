Rails.application.routes.draw do

  root 'align_hash#index'

  get '/align_hash', to: 'align_hash#index'
  get '/align_hash/:reference_number/:version', to: 'align_hash#index'

  post '/align_hash/beautify', to: 'align_hash#beautify'
  post '/align_hash/share', to: 'align_hash#share'
  post '/align_hash/fork', to: 'align_hash#fork'

  get '/beautify_code', to: 'beautify_code#index'
  get '/beautify_code/:reference_number/:version', to: 'beautify_code#index'

  post '/beautify_code/beautify', to: 'beautify_code#beautify'
  post '/beautify_code/share', to: 'beautify_code#share'
  post '/beautify_code/fork', to: 'beautify_code#fork'

  post '/tool/upload', to: 'tool#upload'
  post '/tool/download', to: 'tool#download'

end
