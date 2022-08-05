class Annotation < ApplicationRecord
    belongs_to :picture
    validate :under_annotation_limit? , on: :create
    private
    def under_annotation_limit?
        Picture.find(self.picture_id).annotations.count < 10
    end
end
