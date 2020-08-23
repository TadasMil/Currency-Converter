const express = require('express');
const currencyController = require('../controllers/currency-controller');

const router = express.Router();

router.get('/', currencyController.LoadCurrencies);

router.get('/currency', currencyController.GetAllCurrencies);

module.exports = router;
