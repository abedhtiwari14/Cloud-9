var express = require("express");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home");
});


app.get("/fellinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love",{thingVar:thing});
});

app.get("/posts", function(req, res){
   var posts = [
      {title:"One-Piece", author:"Eichiro Oda"},
      {title:"Pirate-Group", author:"Straw-Hats"},
      {title:"Captain", author:"Monkey.D.Luffy"},
      {title:"Vice-captain", author:"Roronoa Zoro"},
      ]
      res.render("posts",{posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!!!"); 
});