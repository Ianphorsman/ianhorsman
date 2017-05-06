class CreateBlogPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_posts do |t|
      t.integer   :blog_post_list_id
      t.string    :title
      t.string    :html_link
      t.timestamps
    end
  end
end
