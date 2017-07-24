Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :register, function: Functions::Register.new
end
