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

class Image < ApplicationRecord
  mount_uploader :file, ImageUploader

  belongs_to :imageable, polymorphic: true, optional: true
  belongs_to :user, optional: true

  scope :find_by_user_id, ->(user_id) { where(imageable_type: "User", imageable_id: user_id) }

  validates :imageable_type, presence: true
  validates :user, :file, presence: { if: proc { |i| i.imageable_type == "Photo" || i.imageable_type.nil? } }

  def decorate_json
    { id: id }
    # case imageable_type
    # when "Photo"
    #   { id: id }
    # when "User"
    #   { auth_token: user.auth_token }
    # end
  end
end
