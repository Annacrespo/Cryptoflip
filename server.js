// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//   });
  