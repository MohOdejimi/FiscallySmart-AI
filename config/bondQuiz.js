const mongoose = require('mongoose');
const Question = require('../models/./Quiz/bondQuestions'); 

const questionsData = [
    {
      text: "What is a bond?",
      choices: [
        { text: "A type of equity instrument issued by companies to raise capital.", letter: "A" },
        { text: "A type of debt instrument issued by corporations, municipalities, states, and sovereign governments to raise capital.", letter: "B" },
        { text: "A type of derivative used for hedging financial risk.", letter: "C" },
        { text: "A type of security used to insure against credit default.", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "A type of debt instrument issued by corporations, municipalities, states, and sovereign governments to raise capital." }
    },
    {
      text: "Who are typical issuers of bonds?",
      choices: [
        { text: "Only governments and corporations.", letter: "A" },
        { text: "Only municipalities and states.", letter: "B" },
        { text: "Governments, corporations, municipalities, and other organizations.", letter: "C" },
        { text: "Only sovereign governments.", letter: "D" }
      ],
      correctAnswer: { letter: "C", text: "Governments, corporations, municipalities, and other organizations." }
    },
    {
      text: "What is the main characteristic of investment grade bonds?",
      choices: [
        { text: "They are issued by entities with a high risk of default.", letter: "A" },
        { text: "They are considered to be relatively safe investments with a low risk of default.", letter: "B" },
        { text: "They offer a higher potential return to compensate for increased risk.", letter: "C" },
        { text: "They are only issued by sovereign governments.", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "They are considered to be relatively safe investments with a low risk of default." }
    },
    {
      text: "Which type of bond is generally exempt from federal income tax?",
      choices: [
        { text: "Corporate Bonds", letter: "A" },
        { text: "Government Bonds", letter: "B" },
        { text: "Municipal Bonds", letter: "C" },
        { text: "Convertible Bonds", letter: "D" }
      ],
      correctAnswer: { letter: "C", text: "Municipal Bonds" }
    },
    {
      text: "What is a characteristic of callable bonds?",
      choices: [
        { text: "They cannot be called back before the maturity date.", letter: "A" },
        { text: "They typically offer a higher interest rate than non-callable bonds.", letter: "B" },
        { text: "They can be converted into shares of common stock.", letter: "C" },
        { text: "They can be called back by the issuing corporation before the maturity date.", letter: "D" }
      ],
      correctAnswer: { letter: "D", text: "They can be called back by the issuing corporation before the maturity date." }
    },
    {
      text: "What is a primary benefit of the 'Buy and Hold' strategy for bonds?",
      choices: [
        { text: "It allows for frequent trading based on market conditions.", letter: "A" },
        { text: "It provides investors with predictable income and reduces exposure to market volatility.", letter: "B" },
        { text: "It balances the stability of short-term bonds with the higher yields of long-term bonds.", letter: "C" },
        { text: "It aligns the investment with a specific future financial need.", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "It provides investors with predictable income and reduces exposure to market volatility." }
    },
    {
      text: "What is a high-yield bond?",
      choices: [
        { text: "A bond with a high credit rating and low risk of default.", letter: "A" },
        { text: "A bond issued by entities with a lower credit rating and higher perceived risk of default.", letter: "B" },
        { text: "A bond issued by government entities only.", letter: "C" },
        { text: "A bond that cannot be converted into equity.", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "A bond issued by entities with a lower credit rating and higher perceived risk of default." }
    },
    {
      text: "Which type of bond can be converted into shares of common stock?",
      choices: [
        { text: "Government Bonds", letter: "A" },
        { text: "Municipal Bonds", letter: "B" },
        { text: "Corporate Bonds", letter: "C" },
        { text: "Convertible Bonds", letter: "D" }
      ],
      correctAnswer: { letter: "D", text: "Convertible Bonds" }
    },
    {
      text: "What is a characteristic of government bonds?",
      choices: [
        { text: "They are generally backed by the full faith and credit of the issuing government.", letter: "A" },
        { text: "They offer higher interest rates than corporate bonds.", letter: "B" },
        { text: "They are only issued by municipal governments.", letter: "C" },
        { text: "They are more volatile than corporate bonds.", letter: "D" }
      ],
      correctAnswer: { letter: "A", text: "They are generally backed by the full faith and credit of the issuing government." }
    },
    {
      text: "What is the Barbell Strategy in bond investing?",
      choices: [
        { text: "Investing in bonds that all mature at the same time.", letter: "A" },
        { text: "Investing in short-term and long-term bonds, avoiding intermediate maturities.", letter: "B" },
        { text: "Investing in bonds issued by foreign governments and corporations.", letter: "C" },
        { text: "Investing in bonds with the highest possible yields.", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "Investing in short-term and long-term bonds, avoiding intermediate maturities." }
    }
  ];

const bondQuestions = async function initializeQuestions() {
  try {
    const existingQuestions = await Question.find({});
    if (existingQuestions.length === 0) {
      await Question.insertMany(questionsData);
      console.log('Bond Questions inserted successfully');
    }
  } catch (error) {
    console.error('Error initializing questions:', error);
  } 
};

(async () => {
  await bondQuestions();
})();

module.exports = bondQuestions;
