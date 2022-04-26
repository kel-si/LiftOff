class Api::CommentsController < ApplicationController
    def index
      @current_user = User.find(session[:user_id])
      @comments = Comment.where(status: 1) && Comment.where(user_id: @current_user[:id] )
      render json: {
        comments: @comments
      }
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

  # def create 
    # find current user
    # @current_user = User.find(session[:user_id])
    # @current_level = @current_user[:level]
    # 
    # if current user level is 1, set comment status as 0 (requires admin approval)
    # if @current_level = 1
      # @comment = Comment.new(comment_params)
    # end 
 
# 
    # if current user level is 2,  set comment status as 1 (autoapproved)
    # if @current_level = 2 
      # @comment = Comment.new(comment_params)
    # end 

  
    # if current user level is 3, set comment status as 1 (autoapproved)
    # if @current_level = 3
      # @comment = Comment.new(comment_params)
    # end 
  # 

# 
    # if @comment.save
      # render json: {
        # comment: @comment
      # }
    # else 
      # render json: {
        # errors: ["not getting it"]
      # }
    # end 
  # end 

  

  private 
  def comment_params 
    params.require(:comment).permit(:text, :user_id, :post_id, :status, :comment_approval)
  end 
end