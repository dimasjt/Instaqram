Types::CommentType = GraphQL::ObjectType.define do
  name "Comment"

  field :id, types.ID
  field :content, types.String
  field :user, type: Types::UserType
  field :photo, type: Types::PhotoType
end
