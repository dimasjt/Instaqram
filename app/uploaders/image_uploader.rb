class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url(*args)
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

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
