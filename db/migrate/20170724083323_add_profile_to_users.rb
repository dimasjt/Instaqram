class AddProfileToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :birthdate, :string
    add_column :users, :caption, :string
    add_column :users, :website, :string
    add_column :users, :image, :string
  end
end
