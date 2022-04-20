class Api::UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.index
      redirect_to '/my-posts'
    else
      redirect_to '/register'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :parent_email, :password, :password_confirmation)
  end
end
