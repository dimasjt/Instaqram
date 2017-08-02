class CreateFollowships < ActiveRecord::Migration[5.1]
  def change
    create_table :followships do |t|
      t.integer :follower_id
      t.integer :following_id

      t.timestamps
    end
    add_index :followships, :follower_id
    add_index :followships, :following_id
    add_index :followships, [:follower_id, :following_id], unique: true
  end
end
