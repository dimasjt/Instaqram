class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

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
