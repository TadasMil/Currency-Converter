const express = require('express');
const bodyParser = require('body-parser');
const currencyRoute = require('./routes/currency-route')
const mongoose = require('mongoose');
const Currency = require('./models/currency')

const app = express();

const connection = 'mongodb+srv://tadas:nqOvq9nJxfKMPSAv@converter.scct9.mongodb.net/Currencies?retryWrites=true&w=majority';

app.use(bodyParser.json());

app.use('/', currencyRoute);

app.get('/add-product', (req, res, next) => {
    const currency = new Currency({
        title: 'LT',
        name: 'Litai'
    })

    currency.save()
        .then(result => {
            res.send(result);
        }).catch(error => {
            console.log(error);
        });
})

app.get('/all-products', (req, res, next) => {
    Currency.find()
        .then((result) => {
            res.send(result);
        }).catch(error => {
            console.log(error);
        }) 
})

mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected');
        app.listen(5000);
    })
    .catch((error) => {
        console.log(error);
});
 