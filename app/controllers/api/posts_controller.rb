class Api::PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @user = User.create({email: "dummy@fake.com"})
    puts "params", params
    puts "another one", params[:post]
    @post = Post.new(post_params)
    @post.user = @user
    if @post.save 
      render json: {
        post: @post 
      }
    else 
      puts @post.errors.inspect
      render json: {
        errors: ["not getting it"]
      }
    end 
  end 

  private 

  def post_params 
    params.require(:post).permit(:text)
  end 
end 