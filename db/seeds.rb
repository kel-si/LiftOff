# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join("db", "seed_assets", file_name))
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
  image: "https://i.ibb.co/RDth1s2/post-1.jpg",
  user_id: 5
 },
 {
  text: "LOL",
  image: "https://i.ibb.co/GJZWMnL/post-2.jpg",
  user_id: 6
 },
 {
  text: "Morning breakfast!☀️🍓🍓🥞",
  image: "https://i.ibb.co/yyJMVhz/post-3.jpg",
  user_id: 5
 },
 {
  text: "Brothers and sisters. Miranda Priestly.",
  image: "https://i.ibb.co/s1yzHHj/post-4.jpg",
  user_id: 6
 },
 {
  text: "Fuck coffeecup",
  image: "https://i.ibb.co/Smfvf2T/post-5.jpg",
  user_id: 5
 },
 {
  text: "😜",
  image: "https://i.ibb.co/g401Gfz/post-6.jpg",
  user_id: 6
 },
 {
  text: "Becoming a photographer with my 📸",
  image: "https://i.ibb.co/199GtVf/post-7.jpg",
  user_id: 5
 },
 {
  text: "Mom and dad's anniversary🍷",
  image: "https://i.ibb.co/B6zQSgr/post-8.jpg",
  user_id: 6
 },
 {
  text: "My new best friend",
  image: "https://i.ibb.co/DbgMLhM/post-9.jpg",
  user_id: 5
 }
])

puts "Post.count", Post.count

Comment.create!([
  {
  text: "Buy my art at my parent's Etsy store www.etsy.com",
  post_id: 1,
  user_id: 5
},
{
  text: "I think this elephant is evil",
  post_id: 1,
  user_id: 1
},
{
  text: "I love this!",
  post_id: 1,
  user_id: 3
},
{
  text: "Awwww so cute😍",
  post_id: 9,
  user_id: 6
},
{
  text: "So fcking cute!!",
  post_id: 9,
  user_id: 4
},
{
  text: "You are so ugly 🤢",
  post_id: 2,
  user_id: 2
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
}
])

puts "Comment.count", Comment.count