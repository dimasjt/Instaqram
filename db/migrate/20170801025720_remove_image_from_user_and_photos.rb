class RemoveImageFromUserAndPhotos < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :image
    remove_column :photos, :image
  end
end
