class RemoveReferences1 < ActiveRecord::Migration[6.0]
  def change
    remove_reference :annotations, :pictures, index: true, foreign_key: true
  end
end
