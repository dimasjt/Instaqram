Types::PhotoType = GraphQL::ObjectType.define do
  name "Photo"

  field :id, types.ID
  field :caption, types.String
  field :comments_count, types.Int
  field :likes_count, types.Int
  field :image, Types::ImageType do
    resolve ->(obj, args, ctx) {
      obj.images.first.file
    }
  end
  field :created_at, Types::HumanTimeType
  field :updated_at, Types::HumanTimeType

  field :comments, type: types[Types::CommentType]
  field :user, type: Types::UserType
end
