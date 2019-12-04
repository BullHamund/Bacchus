const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
const app = express();
const routes = require("./routes");

app.use(express.static("public"));

app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);