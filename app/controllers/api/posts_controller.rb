class Api::PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save 
      render json: {
        post: @post 
      }
    else 
      render json: {
        errors: ["not getting it"]
      }
    end 
  end 

  private 

  def post_params 
    params.require(:post).permit(:text, :user_id)
  end 
end 