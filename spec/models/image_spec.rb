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
  context "validations" do
    let(:user) { create(:user) }
    let!(:photo) { create(:photo, user: user) }
    let(:image) { build(:image) }

    it "valid for User" do
      image.imageable = user
      image.save
      expect(image.imageable).to eq(user)
    end

    it "valid for Photo" do
      image.imageable = photo
      image.save
      expect(image.imageable).to eq(photo)
    end

    context "prsence file and user" do
      let(:image) { build(:image, imageable: nil, file: nil, user: nil) }

      it "for User" do
        image.imageable_type = "User"
        image.valid?
        expect(image.errors.messages.keys).to_not include %w[user file]
      end

      it "for Photo" do
        image.imageable_type = "Photo"
        image.valid?
        expect(image.errors.messages.keys).to include :user
        expect(image.errors.messages.keys).to include :file
      end
    end
  end
end
