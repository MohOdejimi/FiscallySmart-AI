const mongoose = require('mongoose')

const stockSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    goalID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    open: {
        type: Number,
        required: true
    },
    close: {
        type: Number,
        required: true,
    },
    high: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    holdings: {
        type: Number,
        required: true
    },
    percentageGain:{
        type: Number,
    },
    positiveValue: {
        type: Number
    },
    percentageLoss: {
        type: Number
    },
    negativeValue: {
        type: Number
    }
})

module.exports = mongoose.model('symbols', stockSchema)