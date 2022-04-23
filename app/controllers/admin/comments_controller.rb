class Admin::CommentsController < ApplicationController

  def index
    @comments = Comment.where(status: 0)

    render :json => { comments: @comments }
  end

  def create
  end

  def update
    put "params", params
    put "params status", params[:status]
    @comment = Comment.find params[:id]
    @status = @comment[:status] + params[:status].to_i
    @comment.update(:status => @status)
    puts "new status", @comment
    render json: {
      status: @status
    }
  end 

  def destroy
    put "params", params
    put "params status", params[:status]
    @comment = Comment.find params[:id]
    @comment.destroy
    render json: {
      comment: nil
    }
  end

  private 

  def comment_admin_params
    params.require(:id).permit(:status)
  end 
end
