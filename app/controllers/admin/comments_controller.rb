class Admin::CommentsController < ApplicationController

  def index
    @comments = Comment.all

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
