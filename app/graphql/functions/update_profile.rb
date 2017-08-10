class Functions::UpdateProfile < GraphQL::Function
  UpdateProfileInput = GraphQL::InputObjectType.define do
    name "UpdateProfile"

    argument :name, types.String
    argument :email, types.String
    argument :username, types.String
    argument :website, types.String
    argument :caption, types.String
    argument :birthdate, types.String
    argument :password, types.String
    argument :image_id, types.ID
  end

  argument :user, !UpdateProfileInput
  type Types::TokenType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      params = args[:user].to_h

      if image = Image.find_by_user_id(user.id).find_by(id: params.delete("image_id"))
        user.image.try(:destroy)
        user.reload.image = image
        user.save
      end

      user.update(params)
      user
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end

  def new_image(image)
    if Rails.env.production?
      File.open(open(image.file.url))
    else
      File.open(File.join(Rails.root, "/public", image.file.url))
    end
  end
end
