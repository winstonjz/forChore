Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :new, :destroy]
    resources :groups
    resources :groupings
    resources :chores
    resources :comments, only: [:index, :create, :destroy, :show]
    resource :user do
      get :dashboard
    end
  end
  root "static_pages#root"
end
