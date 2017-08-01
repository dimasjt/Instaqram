# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  photo_id   :integer
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_comments_on_photo_id  (photo_id)
#  index_comments_on_user_id   (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (photo_id => photos.id)
#  fk_rails_...  (user_id => users.id)
#

class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo, counter_cache: true

  validates :content, :user, :photo, presence: true
end
