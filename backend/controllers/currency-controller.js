var currencyService = require('../services/currency-service');

const LoadCurrencies = (req, res, next) => {
    try{
        currencyService.GetAllCurrencies().then(() =>  res.status(200).json("Data was loaded"));
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
        return res.status(400).json({message: error.message})
    }
}

// const GetCurrencyNames = (req, res, next) => {
//     try{
//         currencyService.GetCurrenciesFullNames().then((result) => {
//             res.status(200).json(result)
//         })
//     } catch (error) {
//         return res.status(400).json({message: error.message})
//     }
// }


exports.LoadCurrencies = LoadCurrencies;
exports.GetAllCurrencies = GetAllCurrencies;
//exports.GetCurrencyNames = GetCurrencyNames;