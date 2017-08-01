class Api::BaseController < ActionController::Base
  before_action :authenticate_by_auth_token

  private

  def authenticate_by_auth_token
    auth_token = request.headers["Authorization"].try(:sub, /Bearer /, "")

    if auth_token && user = User.authenticate(auth_token)
      sign_in user, store: false
    end
  end
end
