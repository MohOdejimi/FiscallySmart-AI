const mongoose = require('mongoose');
const Question = require('../models/./Quiz/etfQuestions'); 

const questionsData = [
  {
    text: "What does ETF stand for?",
    choices: [
      {
        text: "Equity Traded Fund",
        letter: "A"
      },
      {
        text: "Exchange-Traded Fund",
        letter: "B"
      },
      {
        text: "Exchange-Traded Finance",
        letter: "C"
      },
      {
        text: "Equity Traded Finance",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "B",
      text: "Exchange-Traded Fund"
    }
  },
  {
    text: "Which of the following is a characteristic of ETFs?",
    choices: [
      {
        text: "They can only be bought and sold at the end of the trading day.",
        letter: "A"
      },
      {
        text: "They generally disclose their holdings monthly.",
        letter: "B"
      },
      {
        text: "They often provide instant diversification.",
        letter: "C"
      },
      {
        text: "They are not traded on stock exchanges.",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "C",
      text: "They often provide instant diversification."
    }
  },
  {
    text: "What type of assets do commodity ETFs invest in?",
    choices: [
      {
        text: "Stocks",
        letter: "A"
      },
      {
        text: "Bonds",
        letter: "B"
      },
      {
        text: "Real Estate",
        letter: "C"
      },
      {
        text: "Commodities like gold or oil",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "D",
      text: "Commodities like gold or oil"
    }
  },
  {
    text: "Which type of ETF is designed to profit from a decline in the value of an underlying benchmark?",
    choices: [
      {
        text: "Stock ETFs",
        letter: "A"
      },
      {
        text: "Inverse ETFs",
        letter: "B"
      },
      {
        text: "Bond ETFs",
        letter: "C"
      },
      {
        text: "Sector ETFs",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "B",
      text: "Inverse ETFs"
    }
  },
  {
    text: "Which of the following ETFs invests in bonds?",
    choices: [
      {
        text: "Bond ETFs",
        letter: "A"
      },
      {
        text: "Stock ETFs",
        letter: "B"
      },
      {
        text: "Commodity ETFs",
        letter: "C"
      },
      {
        text: "Sector ETFs",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "A",
      text: "Bond ETFs"
    }
  },
  {
    text: "What is a key benefit of investing in ETFs?",
    choices: [
      {
        text: "They offer no diversification.",
        letter: "A"
      },
      {
        text: "They provide exposure to a wide range of assets.",
        letter: "B"
      },
      {
        text: "They cannot be traded on stock exchanges.",
        letter: "C"
      },
      {
        text: "They are only suitable for short-term trading.",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "B",
      text: "They provide exposure to a wide range of assets."
    }
  },
  {
    text: "Which type of ETF focuses on specific sectors or industries?",
    choices: [
      {
        text: "Bond ETFs",
        letter: "A"
      },
      {
        text: "International ETFs",
        letter: "B"
      },
      {
        text: "Sector and Industry ETFs",
        letter: "C"
      },
      {
        text: "Commodity ETFs",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "C",
      text: "Sector and Industry ETFs"
    }
  },
  {
    text: "How can ETFs be used in hedging strategies?",
    choices: [
      {
        text: "By holding them for an extended period to benefit from overall market growth",
        letter: "A"
      },
      {
        text: "By using inverse ETFs to protect against market downturns",
        letter: "B"
      },
      {
        text: "By investing in bond or dividend ETFs to generate regular income",
        letter: "C"
      },
      {
        text: "By using leveraged ETFs to magnify returns in short-term trading",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "B",
      text: "By using inverse ETFs to protect against market downturns"
    }
  },
  {
    text: "What type of ETFs provide exposure to markets outside of the investor's home country?",
    choices: [
      {
        text: "Stock ETFs",
        letter: "A"
      },
      {
        text: "Commodity ETFs",
        letter: "B"
      },
      {
        text: "Sector ETFs",
        letter: "C"
      },
      {
        text: "International ETFs",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "D",
      text: "International ETFs"
    }
  },
  {
    text: "Which type of ETFs are managed by a portfolio manager and do not necessarily track a specific index?",
    choices: [
      {
        text: "Stock ETFs",
        letter: "A"
      },
      {
        text: "Bond ETFs",
        letter: "B"
      },
      {
        text: "Actively Managed ETFs",
        letter: "C"
      },
      {
        text: "Commodity ETFs",
        letter: "D"
      }
    ],
    correctAnswer: {
      letter: "C",
      text: "Actively Managed ETFs"
    }
  }
];


  const etfQuestions = async function initializeQuestions() {
    try {
      const existingQuestions = await Question.find({});
      if (existingQuestions.length === 0) {
        await Question.insertMany(questionsData);
        console.log('Etf Questions inserted successfully');
      }
    } catch (error) {
      console.error('Error initializing questions:', error);
    } 
  };
  
  (async () => {
    await etfQuestions();
  })();
  
  module.exports = etfQuestions;