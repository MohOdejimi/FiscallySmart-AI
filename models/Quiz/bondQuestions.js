const mongoose = require('mongoose');

const bondQuestionSchema = new mongoose.Schema({
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

const bondQuestions = mongoose.model('BondQuestion', bondQuestionSchema);

module.exports = bondQuestions;
