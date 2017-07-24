class Functions::CommentPhoto < GraphQL::Function
  argument :content, !types.String
  argument :photo_id, !types.ID

  type Types::CommentType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      photo = Photo.find(args[:photo_id])

      photo.comments.create!(content: args[:content], user: user)
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
