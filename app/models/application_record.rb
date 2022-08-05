class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
class AnnotationValidator < ActiveModel::Validator
  def validate(annotation)
        if annotation.picture.annotations.count > 9
          annotation.errors.add :base, "You can only add 10 annotations"
        end
  end
end