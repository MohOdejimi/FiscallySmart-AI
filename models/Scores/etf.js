const mongoose = require("mongoose")

const etfScoresSchema = new mongoose.Schema({
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

const etfScores = mongoose.model('etfscore', etfScoresSchema)

module.exports = etfScores