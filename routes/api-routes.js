var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + 'public'));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../views/view.html"));
})

app.get("/view-history", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/history.html"));
})

app.listen(port, function() {
  console.log("Listening on port " + port);
})
