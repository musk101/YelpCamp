var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:node 27017/yelpCamp', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("done!");
});

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");

//schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String

}); 

var Campground=mongoose.model("Campground", campgroundSchema);

// Campground.create({name : "salmon camp" ,
//  image: "https://i.ibb.co/9pSw9dy/download.jpg" }, function(err, campground)
//  {
//      if(err)
//      {
//          console.log(err);
//      }
//      else{
//          console.log("newly created cmpgrund");
//          console.log(campground);
//      }
//  });
// var campgrounds =[
//     {name : "salmon camp" , image: "https://i.ibb.co/9pSw9dy/download.jpg" }
// ];
app.get("/",function(req,res)
{
res.render("landing");
});
app.get("/campgrounds",function(req,res)
{
    Campground.find({}, function(err,allCampgrounds)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
res.render("campgrounds", {campgrounds:allCampgrounds});
}
    });
});
app.post("/campgrounds" , function(req,res)
{
    var name=req.body.name;
    var image=req.body.image;
    var newCampground = {name:name, image:image}
    Campground.create(newCampground, function(err,newlyCreated)
    {
        if(err)
{
    console.log(err);
}
else
{
    res.redirect("/campgrounds");
}
   });
});
app.get("/campgrounds/new",function(req,res)
{
    res.render("new.ejs");
});




app.listen(3000 , function()
{
    console.log("Yelp Camp has started!");
});