const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//allows us to pass the date to post method and calculate it.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
   let num1 = Number(req.body.num1);
   let num2 = Number(req.body.num2);
   let result = num1 + num2;

   res.send(`The result of the calculation is ${result}`);
})

app.listen(8080, function(){
    console.log("App started at port 8080");
})
