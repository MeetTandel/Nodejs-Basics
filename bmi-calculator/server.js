const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let weight = parseFloat(req.body.w1);
    let height = parseFloat(req.body.h1);
    let result = weight / (height*height);

    res.send(`Your BMI is ${result}`)
})

app.listen(8080, function(req, res){
    console.log("Port started at 8080");
})