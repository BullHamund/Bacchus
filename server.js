const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
const app = express();
const routes = require("./routes");


// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));



app.use(express.static("public"));

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//    // res.sendFile('./client/build/index.html');
//     res.sendFile(path.join(__dirname, "../public/index.html"));

// });
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);