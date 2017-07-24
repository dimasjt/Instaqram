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
end
