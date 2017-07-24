class User < ApplicationRecord
  USERNAME_REGEX = /\A[a-zA-Z0-9]+\Z/

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :photos, dependent: :destroy

  validates :username, uniqueness: true, presence: true,
    format: { with: USERNAME_REGEX, message: "only number and letter allowed", allow_blank: true }

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
