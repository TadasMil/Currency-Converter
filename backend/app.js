const express = require('express');
const bodyParser = require('body-parser');
const currencyRoute = require('./routes/currency-route')
const usersActivity = require('./routes/users-activity')
const mongoose = require('mongoose');

const app = express();

const connection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@converter.scct9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', currencyRoute);

app.use('/users-activity', usersActivity);

mongoose
    .connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connected")
        app.listen(process.env.PORT || 5000);
    })
    .catch((error) => {
        console.log(error);
});
 