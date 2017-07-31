class Api::ImagesController < Api::BaseController
  before_action :authenticate_user!

  def create
    @image = Image.new(image_params)

    if @image.save
      render json: { id: @image.id }, status: 201
    else
      render json: { errors: @image.errors }, status: 422
    end
  end

  private

  def image_params
    params.permit(:file, :imageable_type)
  end
end
