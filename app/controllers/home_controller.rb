class HomeController < ApplicationController

  def index
  end

  def show
    blog_post = 'hello world'
    respond_to do |format|
      format.json do
        render :json => {
          :blog_post => blog_post
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
