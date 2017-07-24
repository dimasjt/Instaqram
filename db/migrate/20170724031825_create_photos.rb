class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :image
      t.text :caption
      t.belongs_to :user
      t.integer :comments_count, default: 0
      t.integer :likes_count, default: 0

      t.timestamps
    end
  end
end
