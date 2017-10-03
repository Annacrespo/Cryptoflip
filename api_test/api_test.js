global.fetch = require("node-fetch");
const cc = require("cryptocompare");
const express = require("express");

cc.price("BTC", ["USD", "EUR"]).then(prices => {
  if (err) throw err;
  console.log(prices);
});

cc.priceMulti(["BTC", "ETH"]. ["USD", "EUR"]).th