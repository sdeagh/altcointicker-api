const fetch = require('node-fetch');
let priceObj = {}

const startPricesTicking = () => {
    const timer = 10;
    setInterval(() => {
        getLatestPrice("BTC,XMR,ETH", "USD")
    }, timer*1000);
}

const getLatestPrice = (coins, currency) => {
    const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + coins + "&tsyms=" + currency
    fetch(url)
    .then(response => response.json(response))
    .then(price => {
        let priceObj = price
        return priceObj
    })
    .catch(err => console.log(err))
}
module.exports = {
    startPricesTicking,
    getLatestPrice,
    priceObj
} 