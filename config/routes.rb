Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  namespace :api, default: { format: :json } do
    post "/graphql", to: "graphql#execute"
    post "/images", to: "images#create"
  end

  devise_for :users

  root to: "pages#home"

  get "*path", to: "pages#home"
end
