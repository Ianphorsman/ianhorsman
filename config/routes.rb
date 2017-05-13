Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'home#index'

  get 'home/pandas_tutorial' => 'home#pandas_tutorial'
  get 'home/show/:post_id' => 'home#show'

end
