class Api::CommentsController < ApplicationController
  def index
    #showing all comments regardless of status.
    # @comments = Comment.all

    #only showing approved comments
    @comments = Comment.where(status: 1)

    render :json => { comments: @comments }
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save 
      render json: {
        comment: @comment 
    }
    else 
      render json: {
      errors: ["not getting it"]
      }
    end 
  end

  private 
  def comment_params 
    params.require(:comment).permit(:text, :user_id, :post_id, :status)
  end 
end