Types::UserType = GraphQL::ObjectType.define do
  name "User"

  field :id, types.ID
  field :email, types.String
  field :username, types.String
  field :photos_count, types.Int
  field :followings_count, types.Int
  field :followers_count, types.Int
  field :image, Types::ImageType do
    resolve ->(obj, args, ctx) {
      obj.avatar.file
    }
  end
  field :website, types.String
  field :birthdate, types.String
  field :name, types.String
  field :caption, types.String

  field :followed, types.Boolean do
    resolve ->(obj, args, ctx) {
      user = ctx[:current_user]
      return false unless user

      user.followings.where(id: obj.id).present?
    }
  end

  field :photos do
    type types[Types::PhotoType]
    argument :page, types.Int, default_value: 1

    resolve ->(obj, args, ctx) {
      obj.photos.order(created_at: :desc).page(args[:page])
    }
  end
end
