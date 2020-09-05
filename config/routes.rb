Rails.application.routes.draw do

  root 'hash#index'

  get '/hash/:reference_number/:version', to: 'hash#index'

  post '/hash/beautify', to: 'hash#beautify'
  post '/hash/share', to: 'hash#share'
  post '/hash/fork', to: 'hash#fork'

end
