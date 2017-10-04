$("button").click(function(event) {
  event.preventDefault();
  var newTransaction = {
    quantityInput: $("#quantity-buy").val().trim(),
    currentPrice: $("#current-price").val().trim(),
    quantityOwned: $("#quantity-owned").val().trim(),
    buyingPower: $("#balance").val().trim()
  };
  console.log(newTransaction);
  if(this.id == "buy") {
    $.post("/api/transaction", newTransaction)
    .done(function(data) {
      console.log(data);
    })
  } else if(this.id == "sell"){
    $.post("/api/sold-bitcoin", newTransaction)
    .done(function(data) {
      console.log(data);
    })
  }
});


coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];

// <<<<<<< HEAD
function chart() {
var queryURL = "https://min-api.cryptocompare.com/data/histoday?fsym="+ coinArray[0] + "&tsym=USD&limit=60&aggregate=3&e=CCCAGG";

//LEAVE STRING ARRAY SET VALUE OF VARIABLE WITHIN QUERY JQUERY SELECT .ONCLICK FUNCTION WILL BE QUERY = ARRAY
// =======
// var queryURL = "https://min-api.cryptocompare.com/data/histominute?fsym="+coinArray[0]+"&tsym=USD&limit=60&aggregate=3&e=CCCAGG";
// <<<<<<< HEAD

// =======

// >>>>>>> 3fbd5a10066ba787bad529b74178f104e588b00d
//LEAVE STRING ARRAY SET VALUE OF VARIABLE WITHIN QUERY JQUERY SELECT .ONCLICK FUNCTION WILL BE QUERY = ARRAY
// >>>>>>> b23c1f6296c70a8f10bfecb95c756b2544a1e0a1

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
