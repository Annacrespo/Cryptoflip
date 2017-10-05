// =============================================================
// Dependencies
// =============================================================

var db = require("./../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all transactions
  app.get("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Transaction.findAll().then(function(data){
      res.json(data);
    })
});

  app.post("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    console.log(req.body);
    db.Transaction.create({
      currency: "BTC",
      coinsowned: req.body.quantityOwned,
      buyingpower: req.body.buyingPower,
      quantityBought: req.body.quantityInput,
      amtpurchased:"",
      avgcost:"",
      equityvalue:""}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
  });
});

  // app.delete("/api/transaction", function(req, res) {
  //   // Finding all transaction, and then returning them to the user as JSON.
  //   // Sequelize queries are aynchronous, which helps with percieved speed.
  //   // If we want something to be guaranteed to happen after the query, we'll use
  //   // the .then function

  //   db.Transaction.destroy({
  //     where: {
  //       currency: req.body.currency
  //     }
  //   }).then(function(results) {
  //     // results are available to us inside the .then
  //     res.json(results);
  //   });
  // });

};
