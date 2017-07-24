Types::PhotoType = GraphQL::ObjectType.define do
  name "Photo"

  field :id, types.ID
  field :description, types.String
  field :comments_count, types.Int
  field :likes_count, types.Int
  field :image, Types::ImageType
end
