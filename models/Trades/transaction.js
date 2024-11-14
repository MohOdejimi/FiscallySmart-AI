const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    symbol: {
        type: String,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    amountInvested: {
        type: Number,
        required: true
    },
    entryPrice: {
        type: Number,
        required: true
    },
    goalID: {
        type: mongoose.Schema.ObjectId
    },

})

module.exports = mongoose.model('userTransactionSchema', TransactionSchema)