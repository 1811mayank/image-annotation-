class CreateAnnotations < ActiveRecord::Migration[6.0]
  def change
    create_table :annotations do |t|
      t.string :key
      t.string :value
      t.timestamps
    end
  end
end
