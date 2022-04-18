class Api::TestsController < ApplicationController
  def index
    post = Post.find(2)
    render :json => {
      text: "Hello #{post.text}!",
      user_id: "user_id: #{post.user_id}"
    }
  end
end
