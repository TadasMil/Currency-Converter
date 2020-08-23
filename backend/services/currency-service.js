const axios = require('axios');
const Currency = require('../models/currency');
const parser = require('xml2js');

const GetAllCurrencies = () => {
    var currencyRates = {};
    var data = {};
        return new Promise((resolve) => {
            axios.get('https://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=LT&fbclid=IwAR0rOfhs9jzYFW2Fc9Hef8kpMNlvslD0HUII8bdS3-sp3HQYlJ_y0I1Ico8')
            .then(response => {
                parser.parseString(response.data, (error, result) => {
                                if(error){
                                    throw error;
                                }
                                const parsedData = JSON.stringify(result, null, 4);
                                currencyRates = JSON.parse(parsedData);
    
                        })
                resolve({currency: currencyRates}, InsertCurrencies(currencyRates))
            })
        })
} 

const InsertCurrencies = async (currencyRates) => {
    await Currency.deleteMany();
    for (var key in currencyRates) {   
        for(var number in currencyRates[key].FxRate){
            var currencyValue = currencyRates[key].FxRate[number];
            const currency = new Currency({
                Ccy: currencyValue.CcyAmt[1].Ccy,
                Amt: currencyValue.CcyAmt[1].Amt
            })
            currency.save();
        }
    }
    const currency = new Currency ({
        Ccy: currencyValue.CcyAmt[0].Ccy,
        Amt: currencyValue.CcyAmt[0].Amt
    })
    currency.save();
}

const GetCurrencies = () => {
    return new Promise((resolve) => {
    Currency.find()
        .then(result => {
            resolve(result)
        })
    })
}

// const GetCurrenciesFullNames = () => {
//     var currencyFullNames = {}
//     return new Promise((resolve) => {
//         axios.get('https://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrencyList?wsdl')
//             .then((response) => {
//                 parser.parseString(response.data, (error, result) => {
//                     if(error){
//                         throw error;
//                     }
//                     const parsedData = JSON.stringify(result, null, 4);
//                     currencyFullNames = JSON.parse(parsedData);
//                     var data = {}

//                     for(var key in currencyRates){
//                         for(var number in currencyRates[key]){
//                             console.log(currencyRates[key]..)
//                         }
//                     }
//                 })
//                 resolve(currencyFullNames)
//         })
//     })
// }


exports.GetAllCurrencies = GetAllCurrencies;
exports.InsertCurrencies = InsertCurrencies;
exports.GetCurrencies = GetCurrencies;
//exports.GetCurrenciesFullNames = GetCurrenciesFullNames;