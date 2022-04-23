class Admin::CommentsController < ApplicationController

  def index
    @comments = Comment.where(status: 0)

    render :json => { comments: @comments }
  end

  def create
  end

  def destroy
    @comment = Comment.find params[:id]
    @comment.destroy
    render json: {
      post: nil
    }
  end

end
