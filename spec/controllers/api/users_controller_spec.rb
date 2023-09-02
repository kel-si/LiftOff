require 'rails_helper'

describe Api::UsersController, type: :controller do

  it 'responds ok' do
    get :index
    expect(response).to be_ok
  end
end