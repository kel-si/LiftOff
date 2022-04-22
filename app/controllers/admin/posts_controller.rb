class Admin::PostsController < ApplicationController
  http_basic_authenticate_with name: ENV['ADMIN_NAME'], password: ENV['ADMIN_PASS']
  
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

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    render json: {
      post: nil
    }
  end 

  private 

  def post_params 
    params.require(:post).permit(:text)
  end 

end
