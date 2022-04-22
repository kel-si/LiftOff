class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all

    render :json => { comments: @comments }
  end

  def new
    @comment = Comment.new
  end

  def create
    # @user = User.create(comment_params[:user_id])
    puts "params", params
    puts "another one", params[:comment]
    @comment = Comment.new(comment_params)
    puts "comment_params", comment_params
    # @user = comment_params[:user_id]
    # @comment.user = @user
    @comment.post_id = 1
    if @comment.save 
      render json: {
        comment: @comment 
    }
    else 
      puts @comment.errors.inspect
      render json: {
      errors: ["not getting it"]
      }
    end 
  end

  private 
  def comment_params 
    params.require(:comment).permit(:text, :user_id)
  end 
end
