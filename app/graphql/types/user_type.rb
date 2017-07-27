Types::UserType = GraphQL::ObjectType.define do
  name "User"

  field :id, types.ID
  field :email, types.String
  field :username, types.String
  field :photos_count, types.Int
  field :image, Types::ImageType
  field :website, types.String
  field :birthdate, types.String

  field :photos do
    type types[Types::PhotoType]
    argument :size, types.Int, default_value: 12

    resolve ->(obj, args, ctx) {
      obj.photos.limit(args[:size])
    }
  end
end
