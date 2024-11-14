const mongoose = require('mongoose');

const stockQuestionSchema = new mongoose.Schema({
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

const stockQuestions = mongoose.model('Question', stockQuestionSchema);

module.exports = stockQuestions;
