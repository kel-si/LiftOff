class Admin::CommentsController < ApplicationController

  def index
    @comments = Comment.where(status: 0)

    render :json => { comments: @comments }
  end

  def create
  end

  def update
    puts "params", params
    puts "params status", params[:status]
    @comment = Comment.find params[:id]
    @status = params[:status].to_i
    @comment.update(:status => @status)
    # @comment.increment!(:status)
    puts "new status", @comment
    render json: {
      status: @status
    }
  end 

  def destroy
    puts "params", params
    puts "params status", params[:status]
    @comment = Comment.find params[:id]
    @comment.destroy
    puts "new comment", @comment
    render json: {
      comment: nil
    }
  end

  private 

  def comment_admin_params
    params.require(:id)
  end 
end
