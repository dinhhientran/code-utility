class AddUserToVersions < ActiveRecord::Migration[6.0]
  def change
    add_reference :versions, :user, foreign_key: true
  end
end
