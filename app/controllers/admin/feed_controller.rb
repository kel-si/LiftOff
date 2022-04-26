class Admin::FeedController < ApplicationController
  def index
    @posts = Post.all.order(status: :desc)
    @users = User.all

    render :json => { posts: @posts, users: @users } 
  end

  def create
  end

end
