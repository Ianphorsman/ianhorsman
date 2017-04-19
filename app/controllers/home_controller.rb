class HomeController < ApplicationController

  before_filter :react_default_props

  def index
  end

  def show
    blog_post = render_to_string(:partial => "#{params[:post_name]}.html")
    respond_to do |format|
      format.json do
        render :json => {
            :blogPost => blog_post,
            :routeToBlog => true
        }
      end
    end
  end

  def pandas_tutorial
    respond_to do |format|
      format.js { render :partial => 'pandas_tutorial' }
    end
  end


end
