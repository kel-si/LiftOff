class Api::SessionsController < ApplicationController
  def new
  end

  def create
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = user.id
      puts "made it here!"
    else
      puts "else..."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
