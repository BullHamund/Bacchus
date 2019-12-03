const express = require('express');
const path = require('path');
//const { join } = require("path");
//const cookieParser = require('cookie-parser');
const app = express();
const routes = require("./routes");

//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))
    .use;
app.use(express.static("public"));

app.use(routes);


// An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// // Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile('/client/build/index.html');
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);