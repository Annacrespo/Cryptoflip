// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var currencies = sequelize.define("currencies", {
  balance: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  },
  coin: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: true
});
// Syncs with DB
currencies.sync();
// Makes the Book Model available for other files (will also create a table)
module.exports = currencies;