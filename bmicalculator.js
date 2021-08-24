//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var weight = Number(req.body.weight)/2.205;
  var height = Number(req.body.height)/39.37;
  var bmi = weight / height**2;

  res.send ("Your BMI is " + bmi.toFixed(2) + ".");

});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
