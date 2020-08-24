const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersActivitySchema = new Schema({
    convertedFrom: {type: String, required: true},
    convertedTo: {type: String, required: true},
    amountConverted: {type: String, required: false}
}, {timestamps: true})


module.exports = mongoose.model('users-activities', usersActivitySchema);