class Functions::Register < GraphQL::Function
  RegisterInput = GraphQL::InputObjectType.define do
    name "Register"

    argument :email, !types.String
    argument :password, !types.String
    argument :name, !types.String
    argument :username, !types.String
  end

  argument :user, !RegisterInput
  type Types::TokenType

  def call(obj, args, ctx)
    params = args[:user].to_h

    if image = ctx[:files].try(:first)
      params[:image] = image
    end

    User.create!(params)
  end
end
