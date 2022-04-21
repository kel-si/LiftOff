Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    get '/register' => 'users#new'
    # post '/users/' => 'users#create'

    

    #code we have before the article on April 21
    get 'login' => 'sessions#new'
    # post 'login' => 'sessions#create'
    # get 'logout' => 'sessions#destroy'

    post '/login',    to: 'sessions#create'
    post '/logout',   to: 'sessions#destroy'
    get '/logged_in', to: 'sessions#is_logged_in?'
    
    resources :users, only: [:create, :show, :index] do 
      resources :items, only: [:create, :show, :index, :destroy]
    end 

    resources :feed, :comments

    resources :posts

    get '/posts' => 'posts#new'
    post '/posts' => 'posts#create'

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  

end
