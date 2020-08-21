const express = require('express');
const axios = require('axios');
const parser = require('xml2js');

const router = express.Router();

var currencyRates = {};

router.get('/', (req, res, next) => {
    axios.get('https://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=EU&fbclid=IwAR0rOfhs9jzYFW2Fc9Hef8kpMNlvslD0HUII8bdS3-sp3HQYlJ_y0I1Ico8')
        .then(response => {
            parser.parseString(response.data, (err, result) => {
                if(err){
                    throw err;
                }
                const parsedData = JSON.stringify(result,null, 4);
                currencyRates = JSON.parse(parsedData);
            })

        })
        .catch(error => {
            console.log(error);
        })
    res.json(currencyRates)
})

module.exports = router;
