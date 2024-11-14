const mongoose = require('mongoose');

const etfQuestionSchema = new mongoose.Schema({
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

const etfQuestions = mongoose.model('EtfQuestion', etfQuestionSchema);

module.exports = etfQuestions;
