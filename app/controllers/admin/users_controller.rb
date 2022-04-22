class Admin::UsersController < ApplicationController
  
  def index
    @posts = Post.all
    @users = User.all

    render :json => { posts: @posts, users: @users } 
  end

  def create
    
  end

  def destroy
    @user = User.find params[:id]
    @user.destroy
    render json: {
      post: nil
    }

  end 


end
