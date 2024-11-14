const mongoose = require('mongoose');

const riskQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  choices: [{
    text: {
      type: String,
      required: true
    },
    letter: {
      type: String,
      required: true
    }
  }],
  correctAnswer: {
    letter: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
});

const riskQuestions = mongoose.model('riskQuestion', riskQuestionSchema);

module.exports = riskQuestions;
