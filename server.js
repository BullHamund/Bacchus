const express = require('express');
const path = require('path');
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);