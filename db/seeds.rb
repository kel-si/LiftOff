# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

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

 Post.create!([
   {
  text: "My latest work of art! Meet Mr. Elephant.",
  image: open_asset("post_1.jpg"),
  user_id: 1
 },
 {
  text: "LOL",
  image: open_asset("post_2.jpg"),
  user_id: 2
 },
 {
  text: "Morning breakfast!☀️🍓🍓🥞",
  image: open_asset("post_3.jpg"),
  user_id: 3
 },
 {
  text: "Brothers and sisters. Miranda Priestly.",
  image: open_asset("post_4.jpg"),
  user_id: 4
 },
 {
  text: "Fuck coffeecup",
  image: open_asset("post_5.jpg"),
  user_id: 5
 },
 {
  text: "😜",
  image: open_asset("post_6.jpg"),
  user_id: 6
 },
 {
  text: "Becoming a photographer with my 📸",
  image: open_asset("post_7.jpg"),
  user_id: 6
 },
 {
  text: "Mom and dad's anniversary🍷",
  image: open_asset("post_8.jpg"),
  user_id: 3
 },
 {
  text: "My new best friend",
  image: open_asset("post_9.jpg"),
  user_id: 2
 }
])

puts "Post.count", Post.count