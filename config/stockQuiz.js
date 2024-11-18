const mongoose = require('mongoose');
const Question = require('../models/./Quiz/stockQuestions'); 


const questionsData = [
  {
    text: 'What is a stock?',
    choices: [
      { letter: 'A', text: 'A loan made to a company by an investor' },
      { letter: 'B', text: 'A tiny piece of ownership in a company' },
      { letter: 'C', text: 'A type of bond issued by a company' },
      { letter: 'D', text: 'A fixed interest payment made by a company' }
    ],
    correctAnswer: { letter: 'B', text: 'A tiny piece of ownership in a company' }
  },
  {
    text: 'Who are shareholders?',
    choices: [
      { letter: 'A', text: 'People who lend money to a company' },
      { letter: 'B', text: 'People who buy bonds from a company' },
      { letter: 'C', text: 'People who buy stocks in a company' },
      { letter: 'D', text: 'People who work for a company' }
    ],
    correctAnswer: { letter: 'C', text: 'People who buy stocks in a company' }
  },
  {
    text: 'What is the primary difference between common shares and preferred shares?',
    choices: [
      { letter: 'A', text: 'Common shares provide voting rights, while preferred shares typically do not' },
      { letter: 'B', text: 'Preferred shares provide voting rights, while common shares typically do not' },
      { letter: 'C', text: 'Common shares offer fixed dividends, while preferred shares offer variable dividends' },
      { letter: 'D', text: 'Preferred shares are riskier than common shares' }
    ],
    correctAnswer: { letter: 'A', text: 'Common shares provide voting rights, while preferred shares typically do not' }
  },
  {
    text: 'Which of the following is NOT a characteristic of a public company?',
    choices: [
      { letter: 'A', text: 'Raises capital by selling shares to the public' },
      { letter: 'B', text: 'Shares are traded on public exchanges' },
      { letter: 'C', text: 'Subject to heavy regulation and strict requirements' },
      { letter: 'D', text: 'Raises capital only from founders and venture capitalists' }
    ],
    correctAnswer: { letter: 'D', text: 'Raises capital only from founders and venture capitalists' }
  },
  {
    text: 'What type of stock is issued by companies expected to grow at an above-average rate?',
    choices: [
      { letter: 'A', text: 'Value Stocks' },
      { letter: 'B', text: 'Growth Stocks' },
      { letter: 'C', text: 'Dividend Stocks' },
      { letter: 'D', text: 'Blue-Chip Stocks' }
    ],
    correctAnswer: { letter: 'B', text: 'Growth Stocks' }
  },
  {
    text: 'Which investing style focuses on buying undervalued stocks with strong fundamentals?',
    choices: [
      { letter: 'A', text: 'Growth Investing' },
      { letter: 'B', text: 'Income Investing' },
      { letter: 'C', text: 'Value Investing' },
      { letter: 'D', text: 'Day Trading' }
    ],
    correctAnswer: { letter: 'C', text: 'Value Investing' }
  },
  {
    text: 'What is a common characteristic of dividend stocks?',
    choices: [
      { letter: 'A', text: 'They are issued by new and emerging companies' },
      { letter: 'B', text: 'They provide a steady income stream through regular dividends' },
      { letter: 'C', text: 'They typically do not pay dividends' },
      { letter: 'D', text: 'They are always low-risk investments' }
    ],
    correctAnswer: { letter: 'B', text: 'They provide a steady income stream through regular dividends' }
  },
  {
    text: 'Which investing style involves buying and selling stocks within a single trading day?',
    choices: [
      { letter: 'A', text: 'Value Investing' },
      { letter: 'B', text: 'Growth Investing' },
      { letter: 'C', text: 'Income Investing' },
      { letter: 'D', text: 'Day Trading' }
    ],
    correctAnswer: { letter: 'D', text: 'Day Trading' }
  },
  {
    text: 'If a company has issued 1,000 shares and you own 100 of them, what percentage of the company do you own?',
    choices: [
      { letter: 'A', text: '1%' },
      { letter: 'B', text: '5%' },
      { letter: 'C', text: '10%' },
      { letter: 'D', text: '20%' }
    ],
    correctAnswer: { letter: 'C', text: '10%' }
  },
  {
    text: 'Blue-chip stocks are known for their:',
    choices: [
      { letter: 'A', text: 'High growth potential but high risk' },
      { letter: 'B', text: 'Reliability and strong performance over time' },
      { letter: 'C', text: 'Low dividend yields' },
      { letter: 'D', text: 'Focus on short-term gains' }
    ],
    correctAnswer: { letter: 'B', text: 'Reliability and strong performance over time' }
  }
];

const stockQuestions = async function initializeQuestions() {
  try {
    const existingQuestions = await Question.find({});
    if (existingQuestions.length === 0) {
      await Question.insertMany(questionsData);
      console.log('Questions inserted successfully');
    }
  } catch (error) {
    console.error('Error initializing questions:', error);
  } 
};

(async () => {
  await stockQuestions();
})();

module.exports = stockQuestions;
