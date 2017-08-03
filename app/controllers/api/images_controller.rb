class Api::ImagesController < Api::BaseController
  before_action :auth_user!

  def create
    @image = current_user.temp_images.new(image_params)
    @image.imageable = current_user if @image.imageable_type == "User"

    if @image.save
      render json: @image.decorate_json, status: 201
    else
      render json: image_errors, status: 422
    end
  end

  private

  def auth_user!
    render json: { errors: [{
      message: "Unauthenticated"
    }] }, status: 401 unless user_signed_in?
  end

  def image_params
    params.permit(:file, :imageable_type)
  end

  def image_errors
    {
      errors: @image.errors.full_messages.map { |i| { message: i } }
    }
  end
end
