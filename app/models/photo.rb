class Photo < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :user, counter_cache: true

  validates :image, presence: true
end
