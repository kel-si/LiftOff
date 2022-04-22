class Admin::UsersController < ApplicationController
  
  def index
    @users = User.all

    render :json => { users: @users } 
  end

  def create
    
  end

  def destroy
    @user = User.find params[:id]
    @user.destroy
    render json: {
      post: nil
    }

  end 


end
