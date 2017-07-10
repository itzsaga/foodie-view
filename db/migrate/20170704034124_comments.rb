class Comments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :user
      t.string :text
      t.integer :place_id

      t.timestamps
    end
  end
end
