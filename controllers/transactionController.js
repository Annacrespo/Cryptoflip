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
    db.Transaction.findAll({}).then(function(data){
      res.json(data);
    })
});

app.get("/api/new", function(req, res) {
  // Finding all transaction, and then returning them to the user as JSON.
  // Sequelize queries are aynchronous, which helps with percieved speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
    db.Transaction.findAll({
    limit: 1,
    where: {
      //your where conditions, or without them if you need ANY entry
    },
      order: [ [ 'createdAt', 'DESC' ]]
    }).then(function(data){
      //only difference is that you get users list limited to 1
      //entries[0]
      res.json(data);
    })
  });

  app.post("/api/transaction", function(req, res) {
    // Finding all transaction, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    var bP = req.body.buyingPower;
    var quantity = req.body.quantityInput;
    var cP = req.body.currentPrice;
    var coinsOwned = req.body.coinsOwned;
    var totalCost = req.body.totalCost;

    db.Transaction.create({
      currency: "BTC",
      coinsowned: coinsOwned,
      buyingpower: bP,
      totalpurchase: totalCost,
      amtpurchased:quantity,
      avgcost:0,
      equityvalue:0}).then(function(results) {
      // results are available to us inside the .then
      return res.json(results);
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
