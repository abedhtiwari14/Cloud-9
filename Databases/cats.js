var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat-app");

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the DB

var george = new Cat({
    name:"mrs. Norris",
    age:7,
    temperament: "Evil"
});
george.save(function(err, cat){
   if (err) {
       console.log("Something went wrong!!!");
   }
   else{
       console.log("We just added a cat in our DB:");
       console.log(cat);
   }
});

Cat.create({
    name:"Snow White",
    age:15,
    temperament:"Bland"
}, function(err, cat){
   if(err) {
       console.log(err);
   }
   else{
       console.log(cat);
   }
});
