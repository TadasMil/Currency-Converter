const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subSchema = new Schema ({
    Ccy: { type: String, required: true },
    Amt: { type: String, required: true}
})

const currencySchema = new Schema({
   Tp: { type: String, required: true },
   Dt: { type: String, required: true },
   CcyAmt: [subSchema],
}, { timestamps: true })


module.exports = mongoose.model('Currency', currencySchema);