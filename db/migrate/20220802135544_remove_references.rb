class RemoveReferences < ActiveRecord::Migration[6.0]
  def change
    remove_reference :annotations, :Picture, index: true, foreign_key: true
  end
end
