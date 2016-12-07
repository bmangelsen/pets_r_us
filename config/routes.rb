Rails.application.routes.draw do
  resources :appointments do
    collection do
      get :current
    end
  end
  
  # get 'sessions/new'
  resource :session, only: [:new, :create, :destroy]
  resources  :users, except: [:index]

  get '/comments/new/:commentable_type/:commentable_id', controller: :comments, action: :new, as: :new_comment

  post '/comments/:commentable_type/:commentable_id', controller: :comments, action: :create, as: :comments

  resources :owners
  resources :pets
  root 'welcome#index'
end
