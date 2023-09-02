class Admin::CommentsController < ApplicationController
  def index 
    @comments = Comment.where(status: 0) + Comment.where(status: 1)

      render :json => { comments: @comments }
  end 

  def create
  end

  def update
    @comment = Comment.find(params[:id])
    @user = User.find(params[:user_id].to_i)
    @status = params[:status].to_i
    @comment.update(:status => @status)

  if @status === 1
    @user.increment!(:comment_approval)
    render json: {
      comment: @comment,
    }
  elsif @status === 2
    @user.increment!(:comment_rejection)
    render json: {
      comment: @comment,
    }
  end 
end 

  private 

    def comment_admin_params
      params.require(:id)
    end 

end