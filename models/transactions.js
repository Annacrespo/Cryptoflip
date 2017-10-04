module.exports = function (sequelize, DataTypes) {

  var Transaction = sequelize.define("Transaction", {
    currency: {
      type: DataTypes.STRING
    },
    coinsowned: {
      type: DataTypes.INTEGER
    },
    buyingpower: {
      type: DataTypes.INTEGER
    },
    amtpurchased: {
      type: DataTypes.INTEGER
    },
    avgcost: {
      type: DataTypes.INTEGER
    },
    equityvalue: {
      type: DataTypes.INTEGER
    }
  });

  return Transaction;

}
