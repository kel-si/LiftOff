class Api::TestsController < ApplicationController
  def index
    user = User.find(1)
    render :json => {
      message: "Hello #{user.name}!"
    }
  end
end
