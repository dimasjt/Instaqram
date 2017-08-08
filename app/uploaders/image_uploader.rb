class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage Rails.env.production? ? :fog : :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url(*args)
    if model.imageable_type == "User"
      ActionController::Base.helpers.asset_path("defaults/profile.png")
    end
  end

  version :thumb do
    process resize_to_fit: [100, 100]
  end

  version :small do
    process resize_to_fit: [300, 300]
  end

  version :medium do
    process resize_to_fit: [600, 600]
  end

  version :large do
    process resize_to_fit: [800, 800]
  end

  def extension_whitelist
    %w[jpg jpeg png]
  end
end
