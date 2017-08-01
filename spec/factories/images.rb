# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  imageable_id   :integer
#  imageable_type :string
#  file           :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_images_on_imageable_id    (imageable_id)
#  index_images_on_imageable_type  (imageable_type)
#  index_images_on_user_id         (user_id)
#

FactoryGirl.define do
  factory :image do
    transient do
      image_path { Rails.root.join("spec", "fixtures", "images", "example1.jpg") }
      uploaded_image { Rack::Test::UploadedFile.new(image_path, "image/jpeg") }
    end

    association :user

    file { uploaded_image }
  end
end
