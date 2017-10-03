var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var crypto = require("../models/cryptoflip.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  crypto.all(function(data) {
    var hbsObject = {
      price: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  crypto.create([
    "price", "coins owned"
  ], [
    req.body, req.body
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  crypto.update({
    crypto: req.body.coinsOwned
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  crypto.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
