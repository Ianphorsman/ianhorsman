class BlogPostList < ApplicationRecord

  has_many :blog_posts


  def self.get_blog_data
    self.all.map do |bpl|
      {
          :blogPostList => bpl,
          :blogPosts => bpl.blog_posts
      }
    end
  end

end
