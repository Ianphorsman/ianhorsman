class HomeController < ApplicationController

  def index
  end

  def show
    blog_post = render_to_string(:partial => "#{params[:post_name]}.html")
    respond_to do |format|
      format.json do
        render :json => {
          :blogPost => blog_post
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
