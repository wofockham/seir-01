const express = require('express');
const ejs = require('ejs');
const StockFinder = require('stockfinder'); // constructor

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';


const server = express();
server.set('view-engine', ejs);

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  const sf = new StockFinder('stable', req.query.symbol, APIKEY, false);
  sf.getStock().then(response => {
    const { lastSalePrice, symbol } = response[0]; // destructuring
    res.render('info.ejs', {price: lastSalePrice, symbol: symbol});
  }).catch(() => {
    res.redirect('/');
  });
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${ PORT }/`);
});
