var mongoose = require("mongoose"); 

var myfavlist = mongoose.Schema({
    username: String, 
    drink: String, 

}); 

module.exports = mongoose.model('favdrinks', myfavlist);
