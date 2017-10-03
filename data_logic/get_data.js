global.fetch = require("node-fetch");
var cc = require("cryptocompare");
var express = require("express");
var app = express();

cc
  .priceFull(["BTC", "ETH", "LTC", "ZEC", "NEO"], ["USD"])
  .then(prices => {
    console.log(prices);
  })
  .catch(console.error);
