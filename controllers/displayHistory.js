// Get all transactions
app.get("/api/transaction", function(req, res) {
  // Finding all transaction, and then returning them to the user as JSON.
  // Sequelize queries are aynchronous, which helps with percieved speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
  Transaction.findAll({}).then(function(results) {
    // results are available to us inside the .then
    res.json(results);
    console.log(results);
    function(results) {
       var tr = data.report;
       for (var i = 0; i < results.length; i++) {
        tr = $('<tr/>');
          tr.append("<td>" + results[i].currency + "</td>");
          tr.append("<td>" + results[i].coinsowned + "</td>");
          tr.append("<td>" + results[i].buyingpower + "</td>");
          tr.append("<td>" + results[i].amtpurchased + "</td>");
          tr.append("<td>" + results[i].avgcost + "</td>");
          tr.append("<td>" + results[i].equityvalue + "</td>");
          tr.append("<td>" + results[i].createdat + "</td>");
       }
  });
});
