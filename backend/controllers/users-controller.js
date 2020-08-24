const usersServices = require('../services/users-service');

const AddNewUserActivity = (req, res, next) => {
    try{
            const convertedFrom = req.body.convertedFrom
            const convertedTo = req.body.convertedTo
            const amount = req.body.amount
        usersServices.AddNewUserActivity(convertedFrom, convertedTo, amount).then(user => {
            return res.status(200).json(user)
        })
    } catch (error) {
        return res.status(400).json({message: e.message})
    }
}

exports.AddNewUserActivity = AddNewUserActivity;