class Api::SessionsController < ApplicationController
  #our code before the article
  def new
  end
# 
  # def create
    # puts "params", params
    # # if user = User.authenticate_with_credentials(params[:formValue][:email], params[:formValue][:password])
      # session[:user_id] = user.id
      # render json: {
        # logged_in: true,
        # user: user
      # }
    # else
      # render json: { 
        # status: 401,
        # errors: ['no such user, please try again']
      # }
    # end
  # end
# 
  # def destroy
    # session[:user_id] = nil
    # redirect_to '/login'
  # end
# 
def create
  puts "params", params
  @user = User.find_by(email: session_params[:email])

  if @user && @user.authenticate(session_params[:password])
    login!
    render json: {
      logged_in: true,
      user: @user
    }
  else
    render json: { 
      status: 401,
      errors: ['no such user, please try again']
    }
  end
end
  
def is_logged_in?
  if logged_in? && current_user
    render json: {
      logged_in: true,
      user: current_user
    }
  else
    render json: {
      logged_in: false,
      message: 'no such user'
    }
  end
end 

 def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end 

  private
  
  def session_params
    params.require(:formValue).permit(:email, :password)
  end
end 