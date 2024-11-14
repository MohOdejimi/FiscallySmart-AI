const mongoose = require("mongoose")

const riskScoresSchema = new mongoose.Schema({
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

const riskScores = mongoose.model('riskscore', riskScoresSchema)

module.exports = riskScores