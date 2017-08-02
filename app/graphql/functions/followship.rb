class Functions::Followship < GraphQL::Function
  argument :user_id, !types.ID
  type types.Boolean

  def call(obj, args, ctx)
    if @current_user = ctx[:current_user]
      @user = User.find(args[:user_id])

      if followship
        @current_user.followings.delete(@user)
      else
        @current_user.followings << @user
        @current_user.save
      end

      followship && followship.persisted?
    else
      GraphQL::ExecutionError.new("Unauthorized")
    end
  end

  def followship
    ::Followship.where(follower: @current_user, following: @user).first
  end
end
