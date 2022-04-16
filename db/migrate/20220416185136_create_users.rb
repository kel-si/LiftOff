class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :parent_email
      t.integer :level

      t.timestamps null: false
    end
  end
end


