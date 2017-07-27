Types::AuthType = GraphQL::InputObjectType.define do
  name "Auth"

  argument :email, !types.String
  argument :password, !types.String
end
