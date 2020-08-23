var currencyService = require('../services/currency-service');

const LoadCurrencies = (req, res, next) => {
    try{
        currencyService.GetAllCurrencies().then(currency =>  res.status(200).json(currency));
    } catch(e) {
        return res.status(400).json({message: e.message});
    }
}

const GetAllCurrencies = (req, res, next) => {
    try{
        currencyService.GetCurrencies().then(currencies => {
            res.status(200).json(currencies);
        })
    } catch (error) {
        return res.status(400).json({message: e.message})
    }
}


exports.LoadCurrencies = LoadCurrencies;
exports.GetAllCurrencies = GetAllCurrencies;