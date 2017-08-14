class Functions::LikePhoto < GraphQL::Function
  argument :photo_id, !types.ID
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      photo = Photo.find(args[:photo_id])
      like = photo.likes.where(user: user).first

      if like.present? && like.persisted?
        like.destroy
      else
        photo.likes.create!(user: user)
      end

      photo.reload
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
