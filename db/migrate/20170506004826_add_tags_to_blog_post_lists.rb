class AddTagsToBlogPostLists < ActiveRecord::Migration[5.0]
  def change
    add_column :blog_post_lists, :tags, :string
  end
end
