Types::UserType = GraphQL::ObjectType.define do
  name "User"

  field :id, types.ID
  field :auth_token, types.String
  field :email, types.String
end
