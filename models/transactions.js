// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/transactions.js");

var Transactions = sequelize.define("transactions", {
  currency: {
    type: Sequelize.STRING
  },
  coinsowned: {
    type: Sequelize.INTEGER
  },
  buyingpower: {
    type: Sequelize.INTEGER
},
  amtpurchased: {
  type: Sequelize.INTEGER
},
  avgcost: {
  type: Sequelize.INTEGER 
 },
 equityvalue: {
   type: Sequelize.INTEGER
 },
  timestamps: true
});
// Syncs with DB
Transactions.sync();
// Makes the Book Model available for other files (will also create a table)
module.exports = Transactions;