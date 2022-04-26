class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column(:users, :comment_approval, :integer, default: 0)
    add_column(:users, :comment_rejection, :integer, default: 0)
  end
end
