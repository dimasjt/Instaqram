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

require 'rails_helper'

RSpec.describe Followship, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
