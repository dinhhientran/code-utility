class CreateToolAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :tool_attributes do |t|

      t.timestamps
    end
  end
end
