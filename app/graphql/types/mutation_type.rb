Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :register, function: Functions::Register.new
  field :login, function: Functions::Login.new

  field :postPhoto, function: Functions::PostPhoto.new

  field :commentPhoto, function: Functions::CommentPhoto.new
end
