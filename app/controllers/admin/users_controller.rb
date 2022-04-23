class Admin::UsersController < ApplicationController
  
  def index
    @users = User.all

    render :json => { users: @users } 
  end

  def create
    
  end

  def update
    puts "params", params
    puts "params level", params[:level]
    @user = User.find params[:id]
    # if params[:level] == 1
    #   @user.increment!(:level)
    # elsif params[:level] == -1
    #   @user.decrement!(:level)
    # end
    @level = @user[:level] + params[:level].to_i
    @user.update(:level => @level)
    puts "new level", @level
    # add conditional for adding or subtracting level
    render json: {
      level: @level
    }
  end

  def destroy
    @user = User.find params[:id]
    @user.destroy
    render json: {
      post: nil
    }

  end 
private 

  def user_admin_params 
    # figure out what params are needed 
    params.require(:id).permit(:level)
  end 

end
