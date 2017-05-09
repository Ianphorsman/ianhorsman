class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def react_default_props
    @props = {
        :blogPost => nil,
        :blogPostList => nil,
        :blogPostData => BlogPostList.get_blog_data,
        :routeTo => 'splash'
    }
  end
  helper_method :react_default_props

end
