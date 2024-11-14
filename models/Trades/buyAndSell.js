const mongoose = require('mongoose')

const tradeActionsSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tradeactions', tradeActionsSchema)