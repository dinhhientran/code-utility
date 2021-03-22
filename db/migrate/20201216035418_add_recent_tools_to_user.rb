class AddRecentToolsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :tool, :jsonb
  end
end
