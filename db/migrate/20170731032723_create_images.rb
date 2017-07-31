class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :imageable_id
      t.string :imageable_type
      t.string :file

      t.timestamps
    end
    add_index :images, :imageable_id
    add_index :images, :imageable_type
  end
end
