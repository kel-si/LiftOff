class RemoveDefaultFromCommentStatus < ActiveRecord::Migration[5.2]
  def change
  change_column_default(:comments, :status, nil)
  end
end
