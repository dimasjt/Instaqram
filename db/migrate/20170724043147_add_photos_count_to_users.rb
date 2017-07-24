class AddPhotosCountToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :photos_count, :integer, default: 0

    User.pluck(:id).each do |id|
      User.reset_counters(id, :photos)
    end
  end
end
