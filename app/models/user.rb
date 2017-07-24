class User < ApplicationRecord
  USERNAME_REGEX = /\A[a-zA-Z0-9]+\Z/

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :photos, dependent: :destroy

  validates :username, uniqueness: true, presence: true,
    format: { with: USERNAME_REGEX, message: "only number and letter allowed", allow_blank: true }

  def auth_token
    JWT.encode attribute_token, "secrets"
  end

  def attribute_token
    {
      id: id,
      email: email
    }
  end
end
