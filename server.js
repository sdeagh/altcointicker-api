const express = require('express')
const app = express()
const getPrices = require('./getPrices')
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
        priceObj = price
        console.log(priceObj)
    })
    .catch(err => console.log(err))
}

startPricesTicking();

app.get('/prices', (req, res) => {
    res.json(priceObj)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})