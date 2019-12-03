const express = require('express');
const path = require('path');
const axios = require ('axios');
//const cookieParser = require('cookie-parser');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get("/api/getEvents", (req, res) => {

    axios.get("https://www.eventbriteapi.com/v3/events/search/?subcategories=10004&token=R2J7ZIL5EV64IE2GKMW5")
    .then(function (response) {
        // handle success
        res.json(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) 
    })

app.get("/api/getDrinks/:search", (req, res) => {
    console.log(req.params.search);  
      // getData = query => {
          axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+req.params.search)
          .then(function (response) {
              // handle success
              res.json(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            }) 
      // }
  })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile('/client/build/index.html');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);