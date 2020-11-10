class Share < ApplicationRecord

  has_many :versions

  before_create :generate_reference_number

  private

  def generate_reference_number
    self.reference_number = loop do
      random_ref_no = SecureRandom.base36(6)
      break random_ref_no unless Share.exists?(reference_number: random_ref_no)
    end
  end
end
