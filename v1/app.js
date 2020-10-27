var express = require("express");
var app = express();
app.set("view engine" , "ejs");
app.get("/",function(req,res)
{
res.render("landing");
});
app.get("/campgrounds",function(req,res)
{
var campgrounds =[
    {name : "mi" , image: "https://i.ibb.co/9pSw9dy/download.jpg" }
]
res.render("campgrounds", {campgrounds:campgrounds});
});
app.post("/campgrounds" , function(req,res)
{
console.log("you hit post!")
});




app.listen(3000 , function()
{
    console.log("Yelp Camp has started!");
});