# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_04_051516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "shares", force: :cascade do |t|
    t.string "reference_number", null: false
    t.string "tool", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["reference_number"], name: "index_shares_on_reference_number", unique: true
  end

  create_table "versions", force: :cascade do |t|
    t.integer "share_id", null: false
    t.integer "version_number", null: false
    t.jsonb "input", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["share_id", "version_number"], name: "index_versions_on_share_id_and_version_number", unique: true
  end

  add_foreign_key "versions", "shares"
end
