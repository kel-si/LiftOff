class User < ApplicationRecord
  has_secure_password
  validates :name, :email, :password, :parent_email, presence: true
  validates_uniqueness_of :name, :email
  validate :check_user_and_parent_emails
  # validates :name, length: { minimum: 1 }
    
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

  def check_user_and_parent_emails
    errors.add(:email, "cannot be the same as parent email") if email == parent_email
  end
end
