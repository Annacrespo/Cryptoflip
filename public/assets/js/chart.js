var coinList = ["BTC", "LTC", "ETH", "ZEC", "NEO"];

var whichCoin; 

var getData;
var data; //for returned object

// chartjs array to contain data points
var x;
var y;
var labels = [];
var dataPoints = [];


var coinPicker = function (whichCoin) {
  var label;
  var text;

  for (var i = 0; i < data.length; i++) {
    x = moment.unix(data[i].time).format("MM/DD/YY");
    y = data[i].close;
    labels.push(x);
    dataPoints.push(y);
  }

  if (whichCoin === "BTC") {
    label = "BITCOIN";
    text = "Bitcoin Historical Market Data";
  } else if (whichCoin === "LTC") {
    label = "LITECOIN";
    text = "Litecoin Historical Market Data";
  } else if (whichCoin === "ETH") {
    label = 'ETHERIUM';
    text = "Etherium Historical Market Data";
  } else if (whichCoin === "ZEC") {
    label = "ZCASH";
    text = "Zcash Historical Market Data";
  } else if (whichCoin === "NEO") {
    label = "NEO";
    text = "NEO Historical Market Data";
  }
$(document).ready(function(){

  var buyingPower = parseInt($("#balance").text());
  var coinsOwned = parseInt($("#quantity-owned").text());
  var currentPrice = parseInt($("#current-price").text());

  $("#buy").click(function(event) {
    event.preventDefault();

    var quantity = $("#quantity-buy").val();
    var totalCost = quantity * currentPrice;
    var newBalance = buyingPower - totalCost;
    console.log(totalCost);

    var newTransaction = {
      quantityInput: quantity,
      buyingPower: newBalance,
      totalCost: totalCost,
      coinsOwned: coinsOwned,
      currentPrice: currentPrice
    };

      console.log(newTransaction);

      $.post("/api/transaction", newTransaction)
      .done(function(data) {
        console.log(data);
      });

      $("#quantity-buy").val("");
  });

  $("#sell").click(function(event) {
    var quantityToSell = parseInt($("#quantity-sell").val());
    var totalSales = quantityToSell * currentPrice;
    var newBalance = buyingPower + totalSales;

    var newSale = {
      quantityInput: quantityToSell,
      buyingPower: newBalance,
      totalCost: totalSales,
      coinsOwned: coinsOwned,
      currentPrice: currentPrice
    }

    $.post("/api/transaction", newSale)
    .done(function(data) {
      console.log(data);
    });

    $("#quantity-sell").val("");

  })


  coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];

  // <<<<<<< HEAD
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
        label: label,
        borderColor: "#3e95cd",
        fill: false
      }]
    },
    options: {
      title: {
        display: true,
        text: text
      }
    }
  });
};
// ajax call to cryptocompare api for coin data
var coinLoad = function() {
  var apiURL;

  function makeURL(coin) {
    var coinIndex = coinList.indexOf(coin);
    // passing coin parameter to whichCoin global var
    whichCoin = coin;
    apiURL = "https://min-api.cryptocompare.com/data/histoday?";
    apiURL += $.param({
      fsym: coinList[coinIndex],
      tsym: "USD",
      limit: "100",
      aggregate: "3",
      e: "CCCAGG"
    });
    getData = apiURL;
  }
  makeURL("BTC");

  return $.ajax({
    url: getData,
    method: "GET"
  }).done(function (response) {
    console.log(response);
    data = response.Data;
    whichCoin = "LTC";
    coinPicker(whichCoin);
  });
};
coinLoad();



$("button").click(function (event) {
  var newTransaction;
  event.preventDefault();

  if (this.id == "buy") {
    newTransaction = {
      quantityInput: $("#quantity-buy")
        .val()
        .trim(),
      currentPrice: $("#current-price")
        .val()
        .trim(),
      quantityOwned: $("#quantity-owned")
        .val()
        .trim(),
      buyingPower: $("#balance")
        .val()
        .trim()
    };

    $.post("/api/transaction", newTransaction).done(function(data) {
      console.log(data);
      $("#quantity-buy").val("");
    });
  } else if (this.id == "sell") {
    newTransaction = {
      quantityInput: $("#quantity-sell")
        .val()
        .trim(),
      currentPrice: $("#current-price")
        .val()
        .trim(),
      quantityOwned: $("#quantity-owned")
        .val()
        .trim(),
      buyingPower: $("#balance")
        .val()
        .trim()
    };

    $.post("/api/transaction", newTransaction).done(function(data) {
      console.log(data);
      $("quantity-sell").val("");
    });
  }
});
