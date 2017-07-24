class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo, counter_cache: true

  validates :content, :user, :photo, presence: true
end
