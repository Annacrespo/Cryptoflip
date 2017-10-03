global.fetch = require("node-fetch");
var cc = require("cryptocompare");
var express = require("express");
var app = express();

// requesting detailed data object from cryptocompare package
// first parameter array specifies which coins to get data for
// second parameter specifies conversion currency
cc
  .priceFull(["BTC", "ETH", "LTC", "ZEC", "NEO"], ["USD"])
  .then(prices => {
    console.log(prices);
  })
  .catch(console.error);

  // prices object is returned nested objects
  // example: reference current price with (prices.BTC.USD.PRICE)