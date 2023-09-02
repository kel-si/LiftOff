class User < ApplicationRecord
  has_secure_password
    # validates :name, presence: true
    # validates :name, uniqueness: true
    # validates :name, length: { minimum: 1 }

    # validates :email, presence: true
    # validates :password, presence: true
    # validates :password_confirmation, presence: true
    # validates :parent_email, presence: true
    
  has_many :posts
  has_many :comments


  def self.authenticate_with_credentials email, password
    user = User.find_by_email(email)
    if user
      if user.authenticate password
        user
      end
    else
      nil
    end
  end
end
