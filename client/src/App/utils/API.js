import axios from "axios";
// const router = require("express").Router();

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("/api/main/getDrinks", { params: { s: query } });
  },
  getArticles: function() {
    return axios.get("/api/main/getArticles") ;
  },
  getEvents: function() {
    return axios.get("/api/main/getEvents") ;
  }

};
