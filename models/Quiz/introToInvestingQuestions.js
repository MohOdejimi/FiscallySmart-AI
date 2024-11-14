const mongoose = require('mongoose');

const introToInvestingQuestionSchema = new mongoose.Schema({
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

const introToInvestingQuestions = mongoose.model('introToInvestingQuestion', introToInvestingQuestionSchema);

module.exports = introToInvestingQuestions;
