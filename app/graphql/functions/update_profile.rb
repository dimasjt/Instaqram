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
  end

  argument :user, !UpdateProfileInput
  type Types::UserType

  def call(obj, args, ctx)
    if user = ctx[:current_user]
      params = args[:user].to_h

      if image = ctx[:files].try(:first)
        params[:image] = image
      end

      user.update(params)
      user
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
