class CreateTools < ActiveRecord::Migration[6.0]
  def change
    create_table :tools do |t|
      t.string :name, null: false
      t.string :alias, null: false
      t.timestamps
    end
  end
end
