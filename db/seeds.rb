# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!([{
  name: "Miranda",
  email: "miranda@fake.com",
  password_digest: "password",
  parent_email: "miranda@parent.com",
  level: 1
},
 {
  name: "Andrea",
  email: "andrea@fake.com",
  password_digest: "password",
  parent_email: "andrea@parent.com",
  level: 1
 },
 {
  name: "Emily",
email: "emily@fake.com",
password_digest: "password",
parent_email: "emily@parent.com",
level: 2
 },
 { 
   name: "Christian",
 email: "christian@fake.com",
 password_digest: "password",
 parent_email: "christian@parent.com",
 level: 2
  },
 {
  name: "Nigel",
  email: "nigel@fake.com",
  password_digest: "password",
  parent_email: "nigel@parent.com",
  level: 3
 },
 {
  name: "Ninja",
  email: "ninja@fake.com",
  password_digest: "password",
  parent_email: "ninja@parent.com",
  level: 3
 }]) 

 puts "User.count", User.count