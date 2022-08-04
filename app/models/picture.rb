class Picture < ApplicationRecord
    has_many :annotations, dependent: :destroy
    
    mount_uploader :picture, PictureUploader
    def under_annotation_limit?
        annotations.count < 10
    end

    def can_add_annotation?
        under_annotation_limit?
    end
    def next
        Picture.where("id > ?", id).first
      end
    
      def prev
        Picture.where("id < ?", id).last
      end
end
