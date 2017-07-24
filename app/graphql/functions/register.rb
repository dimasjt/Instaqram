class Functions::Register < GraphQL::Function
  RegisterInput = GraphQL::InputObjectType.define do
    name "register"

    argument :email, !types.String
    argument :password, !types.String
  end

  RegisterType = GraphQL::ObjectType.define do
    name "register type"

    field :auth_token, types.String
  end

  argument :user, !RegisterInput
  type RegisterType

  def call(obj, args, ctx)
    User.create!(args[:user].to_h)
  end
end
