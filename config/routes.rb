Rails.application.routes.draw do

  root 'hash#index'

  post 'hash/beautify', to: 'hash#beautify'

end
