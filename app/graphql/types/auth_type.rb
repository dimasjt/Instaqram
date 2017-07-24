Types::AuthType = GraphQL::InputObjectType.define do
  name "auth"

  argument :email, !types.String
  argument :password, !types.String
end
