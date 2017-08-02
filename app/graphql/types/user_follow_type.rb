Types::UserFollowType = GraphQL::ObjectType.define do
  name "UserFollow"

  field :id, types.ID
  field :username, types.String
  field :image, Types::ImageType
end
