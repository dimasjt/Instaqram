class Functions::PostPhoto < GraphQL::Function
  PhotoInput = GraphQL::InputObjectType.define do
    name "PostPhoto"

    argument :caption, types.String
  end

  argument :photo, !PhotoInput
  argument :image_id, !types.ID
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      params = args[:photo].to_h

      if image = user.temp_images.find(args[:image_id])
        photo = user.photos.new(params)
        photo.images = [image]
        photo.save

        photo
      else
        raise GraphQL::ExecutionError.new("image required")
      end
    else
      raise GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
