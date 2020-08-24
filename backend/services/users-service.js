const Users = require('../models/user-activity');

const AddNewUserActivity = (convertedFrom, convertedTo, amount) => {
   return new Promise((resolve, reject) => {
    const userActivity = new Users({
        convertedFrom: convertedFrom,
        convertedTo: convertedTo,
        amountConverted: amount
    })
    userActivity.save();
    resolve(userActivity);
   })
}

exports.AddNewUserActivity = AddNewUserActivity