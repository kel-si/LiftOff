class Admin::UsersController < ApplicationController
  
  def index
    @users = User.all

    render :json => { users: @users } 
  end

  def create
    
  end

  def update
    @user = User.find params[:id]
    @level = @user[:level]
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
    params.require(:user).permit(:level, :id)
  end 

end
