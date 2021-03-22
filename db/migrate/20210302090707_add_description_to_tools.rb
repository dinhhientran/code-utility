class AddDescriptionToTools < ActiveRecord::Migration[6.0]
  def change
    add_column :tools, :description, :string
  end
end
