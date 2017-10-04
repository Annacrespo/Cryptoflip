function openHTML() {
    window.open("history.html");
  }

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
$(document).ready(function(){
    chart();
});