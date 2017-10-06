function displayHistory(){
    $.ajax({
        type: "GET",
        url: "api/transaction",
        success: function(data,textStatus,jqXHR) {
         var tr;
         $("#transaction-display").empty();
            for (var i = 0; i < data.length; i++) {
                tr=$("<tr/>");
                tr.append("<td>" + data[i].currency + "</td>");
                tr.append("<td>" + data[i].coinsowned + "</td>");
                tr.append("<td>" + data[i].buyingpower + "</td>");
                tr.append("<td>" + data[i].amtpurchased + "</td>");
                tr.append("<td>" + data[i].avgcost + "</td>");
                tr.append("<td>" + data[i].equityvalue + "</td>");
                tr.append("<td>" + data[i].createdAt + "</td>");
                $("#transaction-display").first().append(tr);
             }
        }
    });
}

function balanceInfo(){
    $.ajax({
        type: "GET",
        url: "api/new",
        success: function(data,textStatus,jqXHR) {
          var balanceUpdate = data[0].buyingpower;
          var coinUpdate = data[0].coinsowned;
           $("#balance").text(balanceUpdate);
           $("#quantity-owned").text(coinUpdate);
        }
    });
}

$(document).ready(function(){
    balanceInfo();
    displayHistory();
});
