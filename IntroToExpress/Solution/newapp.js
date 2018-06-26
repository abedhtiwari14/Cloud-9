var express = require("express");

var app = express();

app.get("/", function(req, res){
   res.send("Hi there, Welcome to my assignment"); 
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
       cow:"Moo",
       dog: "Woof Woof",
       pig: "Oink",
       starfish: "....",
       cat: "I hate human beings"
    }
   var animal = req.params.animal;
   var sound = sounds[animal];
   
    res.send("the" + animal + "says" + sound + "..");
    });


app.get("/repeat/:word/:num", function(req, res) {
   var word = req.params.word;
   var num = Number(req.params.num);
   var result = "";
   
   for(var i=0; i<num; i++){
      result += word + " ";
   }
   res.send(result);
});


app.get("*",function(req, res){
   res.send("Sorry, page not found.... What are yo doing with your life?"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!!!"); 
});