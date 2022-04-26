class Api::UsersController < ApplicationController
  
  def index
    @users = User.all
       if @users
          render json: {
          users: @users
       }
      else
          render json: {
          status: 500,
          errors: ['no users found']
      }
     end
end

def show
  @user = User.find(params[:id])
      if @user
         render json: {
         user: @user
      }
      else
         render json: {
         status: 500,
         errors: ['user not found']
       }
      end
 end
  
  def create
    puts "user params", params
    @user = User.new(user_params)
    if @user.save
      # session[:user_id] = @user  
      login!
      render json: {
        logged_in: true,
        status: :created,
        user: @user
      }
    else
      render json: { 
        # status: 401,
        # errors: ['error creating user']
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  def update 
    @user = User.find params[:id]
    @level = @user[:level] + params[:level].to_i
    @user.update(:level => @level)
    render json: {
      level: @level
    }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :parent_email, :password, :password_confirmation)
  end

end
