class AddPartNumberToBlogPost < ActiveRecord::Migration[5.0]
  def change
    add_column :blog_posts, :part_num, :integer
  end
end
