class Version < ApplicationRecord

  belongs_to :share

  before_create :generate_version

  private

  def generate_version
    raise Exception.new("Share Id is not set") if share_id.nil?

    current_max_version = Version.where(share_id: share_id).maximum(:version_number)

    self.version_number = current_max_version.nil? ? 100 : current_max_version + 1
  end

end
