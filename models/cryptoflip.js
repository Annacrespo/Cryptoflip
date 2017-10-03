global.fetch = require('node-fetch');
const cc = require('cryptocompare');

// Basic Usage:
cc.price('BTC', ['USD', 'EUR'])
.then(prices => {
  console.log(prices)
  // -> { USD: 1100.24, EUR: 1039.63 }
})
.catch(console.error)

// Passing a single pair of currencies:
cc.price('BTC', 'USD')
.then(prices => {
  console.log(prices)
  // -> { USD: 1100.24 }
})
.catch(console.error)

cc.priceFull(['BTC', 'ETH'], ['USD', 'EUR'])
.then(prices => {
 console.log(prices)
 // {
 //   BTC: {
 //     USD: {
 //       TYPE: '5',
 //       MARKET: 'CCCAGG',
 //       FROMSYMBOL: 'BTC',
 //       TOSYMBOL: 'USD',
 //       FLAGS: '4',
 //       PRICE: 1152.42,
 //       LASTUPDATE: 1487865689,
 //       LASTVOLUME: 0.21,
 //       LASTVOLUMETO: 242.20349999999996,
 //       LASTTRADEID: 1224703,
 //       VOLUME24HOUR: 53435.45299122338,
 //       VOLUME24HOURTO: 60671593.843186244,
 //       OPEN24HOUR: 1119.31,
 //       HIGH24HOUR: 1170,
 //       LOW24HOUR: 1086.641,
 //       LASTMARKET: 'itBit',
 //       CHANGE24HOUR: 33.11000000000013,
 //       CHANGEPCT24HOUR: 2.958072383879366,
 //       SUPPLY: 16177825,
 //       MKTCAP: 18643649086.5
 //     },
 //     EUR: ...
 //   },
 //   ETH: ...
 // }
})
.catch(console.error)
