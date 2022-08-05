class Annotation < ApplicationRecord
    belongs_to :picture
   
    validates_with AnnotationValidator
    
    
end
