// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================

var Transaction = require("../models/transactions.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all transactions
  app.get("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Transaction.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("TRANSACTION HISTORY DETAILS======", results);
    });
  });

  app.post("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    console.log(req.body);
    Transaction.create(req.body).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("TRANSACTION HISTORY DETAILS======", results);
    });
  });

  app.delete("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function

    Transaction.destroy({
      where: {
        currency: req.body.currency
      }
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("TRANSACTION HISTORY DETAILS======", results);
    });
  });
 


};


