const mongoose = require('mongoose')

const portfolioSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    goalID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    symbol: {
        type: String,
    },
    currentValue: {
        type: Number,
    },
    holdings: {
        type: Number,
        required: true
    },
    entryPrice: {
        type: Number,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    loss: {
        type: Number
    },
    gain: {
        type: Number
    }
})

module.exports = mongoose.model('portfolio', portfolioSchema)