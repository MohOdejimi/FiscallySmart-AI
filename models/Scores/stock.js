const mongoose = require("mongoose")

const stockScoresSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dateSaved: {
        type: Date,
        default: Date.now 
      }
})

const stockScores = mongoose.model('stockscore', stockScoresSchema)

module.exports = stockScores