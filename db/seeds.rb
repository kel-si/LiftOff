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
  level: 1,
  comment_approval: 48 ,
  comment_rejection: 2,
},
 {
  name: "Andrea",
  email: "andrea@fake.com",
  password_digest: "password",
  parent_email: "andrea@parent.com",
  level: 1,
  comment_approval: 45,
  comment_rejection: 5,
 },
 {
  name: "Emily",
email: "emily@fake.com",
password_digest: "password",
parent_email: "emily@parent.com",
level: 2,
comment_approval: 42,
comment_rejection: 8,
 },
 { 
   name: "Christian",
 email: "christian@fake.com",
 password_digest: "password",
 parent_email: "christian@parent.com",
 level: 2,
 comment_approval: 40,
 comment_rejection: 10,
  },
 {
  name: "Nigel",
  email: "nigel@fake.com",
  password_digest: "password",
  parent_email: "nigel@parent.com",
  level: 3,
  comment_approval: 44,
  comment_rejection: 6,
 },
 {
  name: "Nicky",
  email: "ninja@fake.com",
  password_digest: "password",
  parent_email: "ninja@parent.com",
  level: 3,
  comment_approval: 43,
  comment_rejection: 7,
 }]) 

 puts "User.count", User.count

 Post.create!([
   {
    text: "Becoming a photographer with my 📸",
    image: "https://i.ibb.co/7bKN66j/post-6.jpg",
    user_id: 5
 },
 {
  text: "Yummmmmmmmmmm",
  image: "https://i.ibb.co/D5dJMfT/post-8.jpg",
  user_id: 6
 },
 {
  text: "Morning breakfast!☀️🍓🍓🥞",
  image: "https://i.ibb.co/3FDRdgM/post-3.jpg",
  user_id: 5
 },
 {
  text: "Pool Party! 😎 🦖 🦕 ",
  image: "https://i.ibb.co/1q8f1GB/post-5.jpg",
  user_id: 5
 },
 {
  text: "My new best friend",
  image: "https://i.ibb.co/pbwzPSV/post-9.jpg",
  user_id: 5
 },
 {
  text: "😜",
  image: "https://i.ibb.co/g401Gfz/post-6.jpg",
  user_id: 6
 },
 {
  text: "My latest work of art! Meet Mr. Elephant.",
  image: "https://i.ibb.co/Kb6QcwS/post-1.jpg",
  user_id: 5
 },
 {
  text: "LOL",
  image: "https://i.ibb.co/GJZWMnL/post-2.jpg",
  user_id: 6
 },
 {
  text: "Brothers and sisters.",
  image: "https://i.ibb.co/6FVFKMj/post-4.jpg",
  user_id: 6
 }
])

puts "Post.count", Post.count

Comment.create!([
  {
  text: "👨‍🎨 👏",
  post_id: 1,
  user_id: 5
},
{
  text: "Looks amazing!",
  post_id: 2,
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
  text: "So cute!!",
  post_id: 9,
  user_id: 4
},
{
  text: "donuts are my favourite!",
  post_id: 2,
  user_id: 2
},
{
  text: "Hi",
  post_id: 7,
  user_id: 3
},

])

puts "Comment.count", Comment.count