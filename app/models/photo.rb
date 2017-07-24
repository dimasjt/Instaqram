# == Schema Information
#
# Table name: photos
#
#  id             :integer          not null, primary key
#  image          :string
#  caption        :text
#  user_id        :integer
#  comments_count :integer          default(0)
#  likes_count    :integer          default(0)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_photos_on_user_id  (user_id)
#

class Photo < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :user, counter_cache: true
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  validates :image, presence: true
end
