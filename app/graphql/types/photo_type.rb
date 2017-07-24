Types::PhotoType = GraphQL::ObjectType.define do
  name "Photo"

  field :id, types.ID
  field :caption, types.String
  field :comments_count, types.Int
  field :likes_count, types.Int
  field :image, Types::ImageType

  field :comments, type: types[Types::CommentType]
end
