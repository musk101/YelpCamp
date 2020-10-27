var express = require("express");
var app = express();
app.set("view engine" , "ejs");
var campgrounds =[
    {name : "mi" , image: "https://i.ibb.co/9pSw9dy/download.jpg" }
];
app.get("/",function(req,res)
{
res.render("landing");
});
app.get("/campgrounds",function(req,res)
{
res.render("campgrounds", {campgrounds:campgrounds});
});
app.post("/campgrounds" , function(req,res)
{
    var name=req.body.name;
    var image=req.body.image;
    var newcampground = {name:name, image:image}
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res)
{
    res.render("new.ejs");
});




app.listen(3000 , function()
{
    console.log("Yelp Camp has started!");
});