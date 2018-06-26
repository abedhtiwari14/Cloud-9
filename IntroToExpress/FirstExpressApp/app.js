var express = require("express");
var app = express();
 
 //Route 1: ("/") => "Hi There!!!"
 app.get("/", function(req, res){
     res.send("Hi There!!!");
 });
 
 //Route2: ("/Bye") => "Good Bye!"
 app.get("/Bye", function(req, res){
     res.send("GoodBye!");
 });
 
 //Route3: ("/dog") => "MEOW"
 app.get("/dog", function(req, res){
    res.send("MEOW!"); 
 });
 
 //Tell Express to listen forrequests(Start Server)
 app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started!!!"); 
 });