const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currencySchema = new Schema({
          Ccy: { type: Array, required: true },
          Amt: { type: Array, required: true },
})


module.exports = mongoose.model('Currency', currencySchema);