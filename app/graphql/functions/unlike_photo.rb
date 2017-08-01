class Functions::UnlikePhoto < GraphQL::Function
  argument :photo_id, types.ID
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      photo = Photo.find(args[:photo_id])
      photo.likes.where(user_id: user.id).destroy_all
      photo
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
