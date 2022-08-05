Rails.application.routes.draw do
  root 'welcome#index'
  resource :pictures
  get '/preview/:id', to: 'pictures#preview'
  patch 'pictures/:id', to: 'pictures#update'
  # get '/abc', to: 'pictures#abc'
  get '/next_image/:id', to: 'pictures#next_image'
  get '/prev_image/:id', to: 'pictures#prev_image'
  get '/annotations/:id', to: 'pictures#annotations'
end
