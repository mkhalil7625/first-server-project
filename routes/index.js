var express = require('express');
var router = express.Router();
var exchangeRates=require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/convert', function (req,res,next) {
    var query = req.query;
console.log(query);
console.log(exchangeRates);
var dollars=req.query.dollars;
var to_currency=req.query.to_currency;

var converted=dollars*exchangeRates[to_currency];

// res.send(dollars+" in "+to_currency+" is "+converted);
//
//     res.send(query);

    res.render('results',{
        dollars:dollars,
        to_currency:to_currency,
        converted:converted
    });
});
router.get('/about', function(req, res, next) {
    res.render('about');
});
module.exports = router;
