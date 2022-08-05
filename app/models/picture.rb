class Picture < ApplicationRecord
    has_many :annotations, dependent: :destroy
    mount_uploader :picture, PictureUploader
    
    def next
      Picture.where("id > ?", id).first
    end
    
    def prev
      Picture.where("id < ?", id).last
    end
end
