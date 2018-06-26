var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST  -title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
 var Post = mongoose.model("Post", postSchema);
 
 //USER -email, name
 var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
 });
  var User = mongoose.model("User", userSchema);
 
// //  var newUser = new User({
// //     email: "charli@brown.edu",
// //     name: "Charlie Brown"
// //  });
// //  newUser.save(function(err, user){
// //      if(err){
// //          console.log(err);
// //      }else{
// //          console.log(user);
// //      }
// //  });
 
//  var newPost = new Post({
//      title:"Reflections on Apples",
//      content:"They are delicious"
//  });
//  newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
//  });
 
 // var newUser = new User({
 //    email: "hermoine@hogwarts.edu", 
 //    name: "Hermoine Granger"
 // });
 // newUser.posts.push({
 //     title:"How too bre polyjuice potion",
 //     content:"Just Kidding. Go to potions class to learn it!!!"
 // });
 
 // newUser.save(function(err, user){
 //     if(err){
 //         console.log(err);
 //     }else{
 //         console.log(user);
 //     }
 // });
 
 User.findOne({name: "Hermoine Granger"},function(err, user){
    if(err){
      console.log(err);
    }else{
      user.posts.push({
       title: "3 THINGS IREALLY HATE:",
       content: "VOLDEMORT VOLDEMORT VOLDEMORT"
      });
      user.save(function(err, user){
       if(err){
        console.log(err);
       }else{
          console.log(user);
       }
      });
    }
 });