const express = require('express');
const currencyController = require('../controllers/currency-controller');

const router = express.Router();

router.get('/', currencyController.LoadCurrencies);

router.get('/currency', currencyController.GetAllCurrencies);

//router.get('/currency/names', currencyController.GetCurrencyNames);

module.exports = router;
