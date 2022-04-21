class Api::SessionsController < ApplicationController
  def new
  end

  def create
    puts "params", params
    if user = User.authenticate_with_credentials(params[:formValue][:email], params[:formValue][:password])
      session[:user_id] = user.id
      render json: {
        logged_in: true,
        user: user
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user, please try again']
      }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
