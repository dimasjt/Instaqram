class GraphqlController < ActionController::Base
  before_action :authenticate_by_auth_token

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    result = LearnGraphqlSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

  def authenticate_by_auth_token
    auth_token = request.headers["Authorization"].try(:sub, /Bearer /, "")

    if auth_token && user = User.authenticate(auth_token)
      sign_in user, store: false
    end
  end

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def context
    {
      current_user: current_user,
      files: params[:files]
    }
  end
end
