# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string
#  photos_count           :integer          default(0)
#  name                   :string
#  birthdate              :string
#  caption                :string
#  website                :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

require 'rails_helper'

RSpec.describe User, type: :model do
  describe "relations" do
    it "have image after create" do
      user = build(:user, image: nil)
      user.save

      expect(user.image).to_not be_nil
    end
  end

  context "validations" do
    ["dimasjt", "ry3a"].each do |u|
      it "should valid username #{u}" do
        user = create(:user, username: u)
        expect(user.errors.messages.key?(:username)).to be false
      end
    end

    it "invalid username" do
      user = build(:user, username: "dim*123$$")
      user.valid?
      expect(user.errors.messages.key?(:username)).to be true
    end
  end

  describe "#attribute_token" do
    let(:user) { create(:user) }

    it "has exposed attributes" do
      image = user.image.file
      attrs = {
        id: user.id,
        name: user.name,
        email: user.email,
        caption: user.caption,
        website: user.website,
        birthdate: user.birthdate,
        username: user.username,
        image: {
          thumb: image.thumb.url,
          small: image.small.url,
          medium: image.medium.url,
          large: image.large.url,
          original: image.url
        }
      }
      expect(user.attribute_token.deep_symbolize_keys).to eq attrs
    end
  end
end
