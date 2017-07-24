class Functions::LikePhoto < GraphQL::Function
  argument :photo_id, types.ID
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      photo = Photo.find(args[:photo_id])
      photo.likes.create!(user: user)
      photo
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
