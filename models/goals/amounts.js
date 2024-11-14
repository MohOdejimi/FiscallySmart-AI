const mongoose = require('mongoose')

const usersCurrentAmount = new mongoose.Schema({
    currentAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    goalID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('amounts', usersCurrentAmount)