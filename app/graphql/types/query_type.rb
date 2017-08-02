Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :user do
    type Types::UserType
    argument :username, !types.String

    resolve ->(obj, args, ctx) {
      User.find_by!(username: args[:username])
    }
  end

  field :photo do
    type Types::PhotoType
    argument :id, !types.ID

    resolve ->(obj, args, ctx) {
      Photo.find(args[:id])
    }
  end

  field :followers, function: Functions::FollowshipQuery.new(:followers)
  field :followings, function: Functions::FollowshipQuery.new(:followings)

  field :feed do
    type types[Types::PhotoType]
    argument :size, types.Int
    resolve ->(obj, args, ctx) {
      if current_user = ctx[:current_user]
        current_user.feed
      else
        Photo.none
      end
    }
  end
end
