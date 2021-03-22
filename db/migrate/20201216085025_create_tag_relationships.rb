class CreateTagRelationships < ActiveRecord::Migration[6.0]
  def change
    create_table :tag_relationships do |t|
      t.belongs_to :tag, foreign_key: true, null: false
      t.integer :object_id, null: false
      t.string :object_type, null: false
      t.timestamps
    end
  end
end
