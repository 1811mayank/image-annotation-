class AddReferences1 < ActiveRecord::Migration[6.0]
  def change
    add_reference :annotations, :picture, foreign_key: true
  end
end
