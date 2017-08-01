# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_likes_on_photo_id  (photo_id)
#  index_likes_on_user_id   (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (photo_id => photos.id)
#  fk_rails_...  (user_id => users.id)
#

class Like < ApplicationRecord
  belongs_to :user
  belongs_to :photo, counter_cache: true

  validates :user, uniqueness: { scope: :photo, message: "already liked" }
  validates :photo, :user, presence: true
end
