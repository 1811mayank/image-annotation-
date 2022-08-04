class RemoveIndex < ActiveRecord::Migration[6.0]
  def change
    # remove_index "annotations", ["Picture_id"], name => "index_annotations_on_Picture_id"
    # change_column :annotations, :picture_id, :integer
    add_reference :annotations, :pictures, foreign_key: true
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
