const mongoose = require("mongoose")

const bondScoresSchema = new mongoose.Schema({
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

const bondScores = mongoose.model('bondscore', bondScoresSchema)

module.exports = bondScores