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

require 'rails_helper'

RSpec.describe Image, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
