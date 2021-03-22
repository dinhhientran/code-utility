class Tool < ApplicationRecord

  has_many :tag_relationships, foreign_key: 'object_id'
  has_many :tags, :through => :tag_relationships

  def self.tools_by_tag(slug)
    joins(:tag_relationships).joins(:tags).where('tags.slug' => slug).order('tools.name ASC').distinct
  end

end
