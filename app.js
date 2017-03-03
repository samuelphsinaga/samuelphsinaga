var express = require('express')
var app = express()
var request = require('request')

app.set("view engine", "ejs");

app.get("/result", function (req,res) {
  //get route query
  var query = req.query.search
  //get a API url + route query url
  var url = "http://www.omdbapi.com/?s=" + query
  
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render("result", {param1 : data})
    }
  })
})

app.get("/", function(req,res){
  res.render("search", {param1: "search here"});
})


app.listen(3000)