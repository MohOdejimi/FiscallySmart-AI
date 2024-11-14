const mongoose = require("mongoose")

const introToInvestingScoresSchema = new mongoose.Schema({
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

const introToInvestingScores = mongoose.model('introToInvestingscore', introToInvestingScoresSchema)

module.exports = introToInvestingScores