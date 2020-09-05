class CreateVersions < ActiveRecord::Migration[6.0]
  def change
    create_table :versions do |t|
      t.integer :share_id, null: false
      t.integer :version_number, null: false
      t.jsonb :input, null: false
      t.timestamps
    end

    add_index :versions, [:share_id, :version_number], unique: true
    add_foreign_key :versions, :shares, column: :share_id
  end
end
