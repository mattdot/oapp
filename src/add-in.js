var express = require("express");
var config = require("./config")

console.log(config.port);

var app = express();
app.set("view engine", "jade");

app.get("/", function(req, res) {
   res.render("index"); 
});

app.listen(config.port, function(foo) {
    console.log("add-in started");
});