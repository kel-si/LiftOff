class User < ApplicationRecord
    has_secure_password

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
