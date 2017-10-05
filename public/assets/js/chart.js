$("button").click(function(event) {
  event.preventDefault();

  if(this.id == "buy") {
    var newTransaction = {
      quantityInput: $("#quantity-buy").val().trim(),
      currentPrice: $("#current-price").val().trim(),
      quantityOwned: $("#quantity-owned").val().trim(),
      buyingPower: $("#balance").val().trim()
    };
    con.connect(function(err) {
      if (err) throw err;
      var sql = "INSERT INTO Transactions () VALUES ()";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("transaction insterted!");
      });
    });
    console.log(newTransaction);
    $.post("/api/transaction", newTransaction)
    .done(function(data) {
      console.log(data);
      $("#quantity-buy").val("");

  })
} else if(this.id == "sell"){
    var newTransaction = {
      quantityInput: $("#quantity-sell").val().trim(),
      currentPrice: $("#current-price").val().trim(),
      quantityOwned: $("#quantity-owned").val().trim(),
      buyingPower: $("#balance").val().trim()
    };

    $.post("/api/transaction", newTransaction)
    .done(function(data) {
      console.log(data);
      $("quantity-sell").val("");
    })
  }

});



coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];

function chart() {
var queryURL = "https://min-api.cryptocompare.com/data/histoday?fsym="+ coinArray[0] + "&tsym=USD&limit=60&aggregate=3&e=CCCAGG";

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
  var dataPoints = [];
  var labels = [];
  var data = response.Data;

  for (var i = 0; i < data.length; i++) {
    var x = moment.unix(data[i].time).format("MM/DD/YY");
    var y = data[i].close;
    labels.push(x);
    dataPoints.push(y);
  }

new Chart(document.getElementById("line-chart"), {
  type: 'line',
    data: {
      labels: labels,
      datasets: [{
        data: dataPoints,
        label: "BITCOIN",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bitcoin Market'
    }
  }
});
})
}

chart();

//don't really need this but its exists, just because
setInterval(function() {
    chart();
  }, 60 * 1000);
