class Functions::Followship < GraphQL::Function
  attr_reader :follow_type

  def initialize(type)
    @is_follow = type == :follow
    @follow_type = type
  end

  def is_follow?
    @is_follow
  end

  argument :user_id, !types.ID
  type Types::UserType

  def call(obj, args, ctx)
    if current_user = ctx[:current_user]
      user = User.find(args[:user_id])
      f = followship(current_user, user)

      if is_follow?
        return GraphQL::ExecutionError.new("Already follow") if f.present?
        current_user.followings << user
        current_user.save
      else
        return GraphQL::ExecutionError.new("You are not follow #{user.username}") unless f.present?
        current_user.followings.delete(f)
      end

      user
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end

  def followship(current_user, user)
    @followship ||= current_user.followings.where(id: user.id).first
  end
end
