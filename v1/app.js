var express = require("express");
var app = express();
app.set("view engine" , "ejs");
app.get("/",function(req,res)
{
res.render("landing");
});
app.get("/campgrounds",function(req,res)
{
res.render(" campground landing");
});

app.listen(process.env.PORT,process.env.IP , function()
{
    console.log("Yelp Camp has started!");
});