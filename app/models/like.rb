class Like < ApplicationRecord
  belongs_to :user
  belongs_to :photo, counter_cache: true

  validates :user, uniqueness: { scope: :photo, message: "already liked" }
  validates :photo, :user, presence: true
end
