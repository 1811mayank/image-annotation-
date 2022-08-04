class AddReferencesToAnnotations < ActiveRecord::Migration[6.0]
  def change
    add_reference :annotations, :Picture, foreign_key: true
  end
end
