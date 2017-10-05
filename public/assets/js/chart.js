$("button").click(function(event) {
  event.preventDefault();

  if(this.id == "buy") {
    var newTransaction = {
      quantityInput: $("#quantity-buy").val().trim(),
      currentPrice: $("#current-price").val().trim(),
      quantityOwned: $("#quantity-owned").val().trim(),
      buyingPower: $("#balance").val().trim()
    };

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
// ajax call to cryptocompare api for coin data
var coinLoad = function () {
  var apiURL;
  var coinList = ["BTC", "LTC", "ETH", "ZEC", "NEO"];

  function makeURL(coin) {
    var coinIndex = coinList.indexOf(coin);
    apiURL = "https://min-api.cryptocompare.com/data/histoday?";
    apiURL += $.param({
      fsym: coinList[coinIndex],
      tsym: "USD",
      limit: "100",
      aggregate: "3",
      e: "CCCAGG"
    });
  }
  makeURL("BTC");

  return $.ajax({
    url: apiURL,
    method: "GET"
  }).done(function (response) {
    console.log(response);
    var dataPoints = [];
    var labels = [];
    var data = response.raw;

    for (var i = 0; i < i < data.length; i++) {
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
        }]
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

        }]
      } 
  })
  })
}
  
coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];

function chart() {
var queryURL = "https://min-api.cryptocompare.com/data/histoday?fsym="+ coinArray[0] + "&tsym=USD&limit=60&aggregate=3&e=CCCAGG";

//LEAVE STRING ARRAY SET VALUE OF VARIABLE WITHIN QUERY JQUERY SELECT .ONCLICK FUNCTION WILL BE QUERY = ARRAY
// =======
// var queryURL = "https://min-api.cryptocompare.com/data/histominute?fsym="+coinArray[0]+"&tsym=USD&limit=60&aggregate=3&e=CCCAGG";

// =======


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
