class Functions::DeletePhoto < GraphQL::Function
  argument :id, !types.ID
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      photo = user.photos.find(args[:id])
      photo.destroy
      photo
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
