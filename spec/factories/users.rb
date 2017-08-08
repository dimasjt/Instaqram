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
#  followings_count       :integer          default(0)
#  followers_count        :integer          default(0)
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

FactoryGirl.define do
  factory :user do
    sequence(:username) { |n| "coolguy#{n}" }
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password "letmein123!"
    birthdate { Date.today.to_formatted_s(:db) }
    website "https://instaqram.com"
  end
end
