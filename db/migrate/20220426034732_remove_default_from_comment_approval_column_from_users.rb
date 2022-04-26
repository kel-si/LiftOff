class RemoveDefaultFromCommentApprovalColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:users, :comment_approval, nil)
  end
end

