require 'rails_helper'

RSpec.describe User, type: :model do
  subject { User.new(name: "Frosty", email: "frosty@test.com", parent_email: "parent@fake.com", password: "password1" )}
  user_two = User.new(name: "Frosty", email: "isaac@test.com", parent_email: "parent@fake.com", password: "password1" )
  user_three = User.new(name: "Isaac", email: "frosty@test.com", parent_email: "parentofisaac@fake.com", password: "password2" )

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a name" do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without an email" do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a parent email" do
    subject.parent_email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid with same email for user and parent" do
    subject.parent_email = subject.email
    expect(subject).to_not be_valid
  end

  it "is not valid with a name that is already assigned to another user" do
    subject.save
    expect(user_two).to_not be_valid
  end

  it "is not valid with an email that is already assigned to another user" do
    subject.save
    expect(user_three).to_not be_valid
  end

end