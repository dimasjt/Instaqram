class Functions::PostPhoto < GraphQL::Function
  PhotoInput = GraphQL::InputObjectType.define do
    name "PostPhoto"

    argument :caption, types.String
  end

  argument :photo, !PhotoInput
  type Types::PhotoType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      params = args[:photo].to_h

      if image = ctx[:files].try(:first)
        params[:image] = image
      else
        raise GraphQL::ExecutionError.new("image required")
      end

      user.photos.create(params)
    else
      raise GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
