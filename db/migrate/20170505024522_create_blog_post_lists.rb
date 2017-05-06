class CreateBlogPostLists < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_post_lists do |t|
      t.string    :title
      t.timestamps
    end
  end
end
