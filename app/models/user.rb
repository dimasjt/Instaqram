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
#  image                  :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

class User < ApplicationRecord
  USERNAME_REGEX = /\A[a-zA-Z0-9]+\Z/

  mount_uploader :image, ImageUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :photos, dependent: :destroy
  has_many :likes, dependent: :destroy

  validates :username, uniqueness: true, presence: true,
    format: { with: USERNAME_REGEX, message: "only number and letter allowed", allow_blank: true }
  validates :name, presence: true

  def self.secret_token
    "secrets"
  end

  def self.authenticate(token)
    decoded = JWT.decode(token, User.secret_token).try(:first)
    User.find(decoded["id"])
  rescue JWT::DecodeError
    nil
  end

  def auth_token
    JWT.encode attribute_token, User.secret_token
  end

  def attribute_token
    {
      id: id,
      email: email
    }
  end
end
