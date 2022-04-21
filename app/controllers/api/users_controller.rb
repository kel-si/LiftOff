class Api::UsersController < ApplicationController
  
  def new
  end
  
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user
      render json: {
        logged_in: true,
        user: user
      }
    else
      render json: { 
        status: 401,
        errors: ['error creating user']
      }
    end
  end

  private

  def user_params
    params.require(:formValue).permit(:name, :email, :parent_email, :password, :password_confirmation)
  end
end
