class Photo < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :user, counter_cache: true
  has_many :comments, dependent: :destroy

  validates :image, presence: true
end
