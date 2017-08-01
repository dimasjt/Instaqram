# == Schema Information
#
# Table name: photos
#
#  id             :integer          not null, primary key
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

FactoryGirl.define do
  factory :photo do
    association :user

    caption { Faker::Lorem.sentence }
  end
end
