class Api::FeedController < ApplicationController
   def index
    @posts = Post.all
    @users = User.all

    render :json => { posts: @posts, users: @users } 
 end

 def create
   
 end
end 
