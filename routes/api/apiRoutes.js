var axios = require("axios");
var express = require("express");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
// var db = require("../models");
var router = express.Router();
var events = require("../../events.json");

router.get("/getDrinks", (req, res) => {
     console.log("getDrinks")
    // getData = query => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php",  { params: req.query })
        .then(function (response) {
            // handle success
            console.log(response.data);
            res.json(response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          }) 
    // }
})

router.get("/getEvents", (req, res) => {
  res.json(events);
    
    })

    router.get("/getArticles", (req, res) => {


    request('https://imbibemagazine.com/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    console.log("test")
    var $ = cheerio.load(html);
    var parsedData = [];
    $('article.category-article').each(function(i, element){
      var a = $("a", this);
      var title = a.text(); 
      var url = a.attr('href'); 
      var subtext = $(".entry-summary p", this); 
      var articleData = {
        title: title, 
        url: url,
        subtext: subtext.text()
      }; 
      parsedData.push(articleData)
      console.log(parsedData);
    });
    return res.json(parsedData);
  }
});
    })

module.exports = router;
