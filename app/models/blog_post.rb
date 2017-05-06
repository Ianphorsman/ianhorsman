class BlogPost < ApplicationRecord

  belongs_to :blog_post_list
  has_many :tags

end
