var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");
var campgrounds =[
    {name : "salmon camp" , image: "https://i.ibb.co/9pSw9dy/download.jpg" }
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
    var newCampground = {name:name, image:image}
    campgrounds.push (newCampground) ;
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