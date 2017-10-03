global.fetch = require('node-fetch');
const cc = require('cryptocompare');


// Basic Usage:
cc.priceMulti(['BTC', 'LTC', 'NEO', 'ETH', 'ZEC'], ['USD'])
.then(prices => {
 console.log(prices)
 // -> { BTC: { USD: 1114.63, EUR: 1055.82 },
 //      ETH: { USD: 12.74, EUR: 12.06 } }
})
.catch(console.error)

// // Passing a single pair of currencies:
// cc.priceMulti('BTC', 'USD'), ('LTC', 'USD'), ('NEO', 'USD'), ('ETH', 'USD'), ('ZEC', 'USD')
// .then(prices => {
//  console.log(prices)
//  // -> { BTC: { USD: 1114.63 } }
// })
// .catch(console.error)
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
