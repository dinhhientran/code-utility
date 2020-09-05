class CreateShares < ActiveRecord::Migration[6.0]
  def change
    create_table :shares do |t|
      t.string :reference_number, null: false
      t.string :tool, null: false
      t.timestamps
    end

    add_index :shares, :reference_number, unique: true
  end
end
