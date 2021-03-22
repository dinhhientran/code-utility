class TagRelationship < ApplicationRecord

  belongs_to :object, :polymorphic => true
  belongs_to :tag
end
