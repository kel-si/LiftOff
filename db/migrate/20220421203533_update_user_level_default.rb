class UpdateUserLevelDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:users, :level, 0)
  end
end
