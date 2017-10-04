// acquiring cryptocurrency data objects from CryptoCompare web socket 
var socket = io.connect('https://streamer.cryptocompare.com/');
var CCC = require("utility.js");
//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG
//For aggregate quote updates use CCCAGG as market
var subscription = ['5~CCCAGG~BTC~USD', '5~CCCAGG~ETH~USD'];

socket.emit('SubAdd', {
    subs: subscription
});

socket.on("m", function(message) {
    var messageType = message.substring(0, message.indexOf("~"));
    var res = {};
    if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
        res = CCC.CURRENT.unpack(message);
        console.log(res);
        updateQuote(res);
    }
});