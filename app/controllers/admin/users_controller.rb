class Admin::UsersController < ApplicationController
  
  def index
    @users = User.all.order(id: :desc)

    render :json => { users: @users } 
  end

  def create
    
  end

  def update
    @user = User.find params[:id]
    @level = @user[:level] + params[:level].to_i
    @user.update(:level => @level)
    
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
