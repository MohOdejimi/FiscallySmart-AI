const Question = require('.././models/Quiz/introToInvestingQuestions')

const questionsData = [
    {
      text: "What is the primary goal of investing?",
      choices: [
        { text: "To save money for future use", letter: "A" },
        { text: "To grow wealth and achieve financial goals", letter: "B" },
        { text: "To avoid paying taxes", letter: "C" },
        { text: "To keep money in a safe place", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "To grow wealth and achieve financial goals" }
    },
    {
      text: "Which type of investment represents ownership in a company?",
      choices: [
        { text: "Bonds", letter: "A" },
        { text: "Real Estate", letter: "B" },
        { text: "Stocks", letter: "C" },
        { text: "Commodities", letter: "D" }
      ],
      correctAnswer: { letter: "C", text: "Stocks" }
    },
    {
      text: "What is a key characteristic of bonds?",
      choices: [
        { text: "They represent ownership in a company", letter: "A" },
        { text: "They provide fixed interest payments over time", letter: "B" },
        { text: "They offer high returns but come with high risk", letter: "C" },
        { text: "They are physical goods like gold or oil", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "They provide fixed interest payments over time" }
    },
    {
      text: "Which of the following investment types is managed by professional fund managers?",
      choices: [
        { text: "Mutual Funds", letter: "A" },
        { text: "Stocks", letter: "B" },
        { text: "Bonds", letter: "C" },
        { text: "Real Estate", letter: "D" }
      ],
      correctAnswer: { letter: "A", text: "Mutual Funds" }
    },
    {
      text: "Which investment strategy focuses on buying undervalued stocks with strong fundamentals?",
      choices: [
        { text: "Growth Investing", letter: "A" },
        { text: "Value Investing", letter: "B" },
        { text: "Income Investing", letter: "C" },
        { text: "Day Trading", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "Value Investing" }
    },
    {
      text: "What is a common feature of preferred stocks?",
      choices: [
        { text: "They offer variable dividends", letter: "A" },
        { text: "They have a higher claim on assets than common stocks", letter: "B" },
        { text: "They provide voting rights to shareholders", letter: "C" },
        { text: "They are only suitable for short-term trading", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "They have a higher claim on assets than common stocks" }
    },
    {
      text: "Which type of investment can hedge against inflation and market volatility?",
      choices: [
        { text: "Stocks", letter: "A" },
        { text: "Bonds", letter: "B" },
        { text: "Real Estate", letter: "C" },
        { text: "Commodities", letter: "D" }
      ],
      correctAnswer: { letter: "D", text: "Commodities" }
    },
    {
      text: "What is the benefit of long-term investing?",
      choices: [
        { text: "Focuses on short-term price movements", letter: "A" },
        { text: "Provides regular income through dividends", letter: "B" },
        { text: "Benefits from compounding returns and reduced trading costs", letter: "C" },
        { text: "Involves spreading investments across different asset classes", letter: "D" }
      ],
      correctAnswer: { letter: "C", text: "Benefits from compounding returns and reduced trading costs" }
    },
    {
      text: "What is diversification in investing?",
      choices: [
        { text: "Focusing on buying and holding investments for a long time", letter: "A" },
        { text: "Spreading investments across different asset classes to reduce risk", letter: "B" },
        { text: "Buying undervalued stocks with strong fundamentals", letter: "C" },
        { text: "Investing in companies expected to grow at an above-average rate", letter: "D" }
      ],
      correctAnswer: { letter: "B", text: "Spreading investments across different asset classes to reduce risk" }
    },
    {
      text: "Which investment strategy involves buying and selling stocks within a single trading day?",
      choices: [
        { text: "Long-Term Investing", letter: "A" },
        { text: "Value Investing", letter: "B" },
        { text: "Day Trading", letter: "C" },
        { text: "Income Investing", letter: "D" }
      ],
      correctAnswer: { letter: "C", text: "Day Trading" }
    }
  ];

  const introToInvestingQuestions = async function initializeQuestions() {
    try {
      const existingQuestions = await Question.find({});
      if (existingQuestions.length === 0) {
        await Question.insertMany(questionsData);
        console.log('Investing Questions inserted successfully');
      }
    } catch (error) {
      console.error('Error initializing questions:', error);
    } 
  };
  
  (async () => {
    await introToInvestingQuestions();
  })();
  
  module.exports = introToInvestingQuestions