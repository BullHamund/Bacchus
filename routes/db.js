var mongoose = require('mongoose'); 
var express = require('express');
mongoose.connect('mongodb://localhost:27017/favlist', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected");
});
var myfavlist = new mongoose.Schema({
    username: String, 
    drink: String, 

}); 
var Favs = mongoose.model('favdrinks', myfavlist);
var newDrink = new Favs({ username: "username" });

var app = express(); 
// var axios = require('axios');

app.get("/favorites", function(req, res){
    Favs.find({})
    .then(function(listDrinks) {
        
        res.json(listDrinks);
    })
        
});

app.post("/favorites", function(req, res){
    Favs.create({ username: 'large', drink: 'T-90'}, function(err, res) {
        // 'large' & 'T-90' would be changed according to the front end div class/ id name
       
        // Updated at most one doc, `res.modifiedCount` contains the number
        // of docs that MongoDB updated
        console.log("added")
      });
})

module.exports = app; 