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
    @comment = Comment.find(params[:id])
    @user = User.find(params[:user_id].to_i)
    @status = params[:status].to_i
    @comment.update(:status => @status)

  if @status === 1
    @user.increment!(:comment_approval)
    render json: {
      # status: @status
      comment: @comment,
    }
  elsif @status === 2
    @user.increment!(:comment_rejection)
    render json: {
      # status: @status
      comment: @comment,
    }
  end 
end 
  # def destroy
    # puts "params", params
    # puts "params status", params[:status]
    # @comment = Comment.find(params[:id])
    # @user = User.find(params[:user_id].to_i)
    # @status = params[:status].to_i
    # @comment.update(:status => status)
    # @user.increment!(:comment_rejection)
    # puts "new comment", @comment
    # render json: {
      # comment: @comment, 
    # }
  # end

  private 

  def comment_admin_params
    params.require(:id)
  end 

end
