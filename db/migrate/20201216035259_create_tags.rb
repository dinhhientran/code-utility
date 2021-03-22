class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :slug, null: false
      t.string :name, null: false
      t.timestamps
    end
  end
end
