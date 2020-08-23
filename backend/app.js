const express = require('express');
const bodyParser = require('body-parser');
const currencyRoute = require('./routes/currency-route')
const mongoose = require('mongoose');

const app = express();

const connection = 'mongodb+srv://tadas:nqOvq9nJxfKMPSAv@converter.scct9.mongodb.net/Currencies?retryWrites=true&w=majority';

//mongoose.connect(connection, )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.use('/', currencyRoute);

mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected');
        app.listen(5000);
    })
    .catch((error) => {
        console.log(error);
});
 