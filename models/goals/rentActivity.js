const mongoose = require('mongoose')

const rentActivitySchema = new mongoose.Schema({
    add: {
        type: Number,
    },
    withdraw: {
        type: Number,
    },
    goalID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    created_at: {
        type: Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model('rentActivity', rentActivitySchema)