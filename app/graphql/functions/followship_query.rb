class Functions::FollowshipQuery < GraphQL::Function
  attr_reader :query

  def initialize(query)
    @query = query
  end

  type types[Types::UserFollowType]

  def call(obj, args, ctx)
    if current_user = ctx[:current_user]
      current_user.send(query)
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end
end
