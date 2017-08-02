# == Schema Information
#
# Table name: followships
#
#  id           :integer          not null, primary key
#  follower_id  :integer
#  following_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_followships_on_follower_id                   (follower_id)
#  index_followships_on_follower_id_and_following_id  (follower_id,following_id) UNIQUE
#  index_followships_on_following_id                  (following_id)
#

class Followship < ApplicationRecord
  belongs_to :follower, class_name: "User"
  belongs_to :following, class_name: "User"

  validates :follower, uniqueness: { scope: :following, message: "already follow user" }
end
