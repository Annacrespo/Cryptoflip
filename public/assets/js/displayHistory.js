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
                tr.append("<td>" + data[i].createdat + "</td>");
                $("#transaction-display").first().append(tr);
             }
        }
    });
}

$(document).ready(function(){
    displayHistory();
});