class ModifyUserToolColumns < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :tool, :recent_tools
    add_column :users, :favorite_tools, :jsonb
  end
end
