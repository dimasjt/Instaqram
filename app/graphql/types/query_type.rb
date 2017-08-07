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
    argument :page, types.Int, default_value: 1
    resolve ->(obj, args, ctx) {
      if current_user = ctx[:current_user]
        current_user.feed.page(args[:page]).per(10)
      else
        Photo.none
      end
    }
  end

  field :users do
    type types[Types::UserType]
    resolve ->(obj, args, ctx) {
      if user =  ctx[:current_user]
        User.where.not(id: user.id).order(created_at: :desc)
      else
        User.order(created_at: :desc)
      end
    }
  end
end
