class AddFieldsToVersions < ActiveRecord::Migration[6.0]
  def change
    add_column :versions, :public, :boolean, default: true
    add_column :versions, :name, :string
  end
end
