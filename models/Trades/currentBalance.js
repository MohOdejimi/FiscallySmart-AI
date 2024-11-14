const mongoose = require('mongoose')

const userbalanceSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    currentBalance: {
        type: Number
    },
    amountInvested: {
        type: Number
    }
})

module.exports = mongoose.model('userbalance', userbalanceSchema)