class AddColumnsToPic < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :name, :string
    add_column :pictures, :size, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
