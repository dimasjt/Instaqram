class AddFollowingsCountAndFollowersCountToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :followings_count, :integer, default: 0
    add_column :users, :followers_count, :integer, default: 0

    User.find_each do |user|
      User.reset_counters(user.id, :followers_references)
      User.reset_counters(user.id, :followings_references)
    end
  end
end
