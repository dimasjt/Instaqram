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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
