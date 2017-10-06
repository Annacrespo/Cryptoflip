$(document).ready(function(){
  <<<<<<< HEAD
    
    
    
      $("#buy").click(function(event) {
        event.preventDefault();
        var buyingPower = parseInt($("#balance").text());
        var coinsOwned = parseInt($("#quantity-owned").text());
        var currentPrice = parseInt($("#current-price").text());
    
        var quantity = parseInt($("#quantity-owned").text()) + parseInt($("#quantity-buy").val())
        var newCoins = coinsOwned + quantity;
        var totalCost = quantity * currentPrice;
        var newBalance = buyingPower - totalCost;
        console.log(totalCost);
    
        var newTransaction = {
          quantityInput: quantity,
          buyingPower: newBalance,
          totalCost: totalCost,
          coinsOwned: newCoins,
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
  =======
  
  //BUY COIN BUTTON FUNCTION
    $("#buy").click(function(event) {
      event.preventDefault();
      var buyingPower = parseInt($("#balance").text());
      var coinsOwned = parseInt($("#quantity-owned").text());
      var currentPrice = parseInt($("#current-price").text());
  
      var quantity = parseInt($("#quantity-buy").val());
      var newCoins = parseInt($("#quantity-owned").text()) + parseInt($("#quantity-buy").val());
      var totalCost = quantity * currentPrice;
      var newBalance = buyingPower - totalCost;
  
      console.log(totalCost);
  
      var newTransaction = {
        quantityInput: quantity,
        buyingPower: newBalance,
        totalCost: totalCost,
        coinsOwned: newCoins,
        currentPrice: currentPrice
      };
  
        console.log(newTransaction);
  
        $.post("/api/transaction", newTransaction)
  >>>>>>> b3d0641a6ccd461bf77b68ccf29ff588cb041417
        .done(function(data) {
          console.log(data);
        });
  <<<<<<< HEAD
  
        $("#quantity-buy").val("");
        balanceInfo();
    });
  
  
  // SELL COIN BUTTON FUNCTION
    $("#sell").click(function(event) {
      var buyingPower = parseInt($("#balance").text());
      var coinsOwned = parseInt($("#quantity-owned").text());
      var currentPrice = parseInt($("#current-price").text());
  
      var quantityToSell = parseInt($("#quantity-sell").val());
      var newCoins = parseInt($("#quantity-owned").text()) - parseInt($("#quantity-sell").val());
      var totalSales = quantityToSell * currentPrice;
      var newBalance = buyingPower + totalSales;
  
      var newSale = {
        quantityInput: quantityToSell,
        buyingPower: newBalance,
        totalCost: totalSales,
        coinsOwned: newCoins,
        currentPrice: currentPrice
      }
  
      $.post("/api/transaction", newSale)
      .done(function(data) {
        console.log(data);
      });
  
      $("#quantity-sell").val("");
      balanceInfo();
    })
  
  
    coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];
  
  
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
  =======
    
        $("#quantity-sell").val("");
    
      })
    
    
      coinArray = ["BTC", "NEO", "ETH", "ZEC", "LTC"];
    
  
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
  >>>>>>> 305500ecfbafeadeeda5e1d2c4720640d38e9c53
          }
        }
  <<<<<<< HEAD
      }
    });
    })
  <<<<<<< HEAD
  <<<<<<< HEAD
  }
  =======
  });
  >>>>>>> b3d0641a6ccd461bf77b68ccf29ff588cb041417
  =======
  });
  >>>>>>> b3d0641a6ccd461bf77b68ccf29ff588cb041417
  =======
      });
      })
    });