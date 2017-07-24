Types::TokenType = GraphQL::ObjectType.define do
  name "token"

  field :auth_token, types.String
end
