const Question = require('../models/./Quiz/riskQuestions'); 

const questionsData = [
    {
      text: "What is risk in the context of investing?",
      choices: [
        { letter: "A", text: "The gain or loss generated by an investment over a specific period." },
        { letter: "B", text: "The potential for loss or variability in investment returns." },
        { letter: "C", text: "A steady income stream from investments." },
        { letter: "D", text: "The number of shares held by an individual." }
      ],
      correctAnswer: { letter: "B", text: "The potential for loss or variability in investment returns." }
    },
    {
      text: "Which asset class is known for higher returns but also higher risk?",
      choices: [
        { letter: "A", text: "Bonds" },
        { letter: "B", text: "Real Estate" },
        { letter: "C", text: "Stocks" },
        { letter: "D", text: "Commodities" }
      ],
      correctAnswer: { letter: "C", text: "Stocks" }
    },
    {
      text: "What is a common characteristic of bonds?",
      choices: [
        { letter: "A", text: "High volatility and potential for significant loss." },
        { letter: "B", text: "Provide regular interest payments and return principal at maturity." },
        { letter: "C", text: "Potential for high returns over the long term." },
        { letter: "D", text: "Issued by companies expected to grow at an above-average rate." }
      ],
      correctAnswer: { letter: "B", text: "Provide regular interest payments and return principal at maturity." }
    },
    {
      text: "Which asset class can act as a hedge against inflation but is also highly volatile?",
      choices: [
        { letter: "A", text: "Stocks" },
        { letter: "B", text: "Real Estate" },
        { letter: "C", text: "Bonds" },
        { letter: "D", text: "Commodities" }
      ],
      correctAnswer: { letter: "D", text: "Commodities" }
    },
    {
      text: "What does diversification in a portfolio aim to achieve?",
      choices: [
        { letter: "A", text: "Increase the potential for high returns." },
        { letter: "B", text: "Reduce risk by spreading investments across various asset classes." },
        { letter: "C", text: "Focus on short-term price movements." },
        { letter: "D", text: "Prioritize capital appreciation over dividends." }
      ],
      correctAnswer: { letter: "B", text: "Reduce risk by spreading investments across various asset classes." }
    },
    {
      text: "Which investment strategy focuses on buying undervalued stocks with strong fundamentals?",
      choices: [
        { letter: "A", text: "Growth Investing" },
        { letter: "B", text: "Income Investing" },
        { letter: "C", text: "Day Trading" },
        { letter: "D", text: "Value Investing" }
      ],
      correctAnswer: { letter: "D", text: "Value Investing" }
    },
    {
      text: "What is a key benefit of investing in real estate?",
      choices: [
        { letter: "A", text: "High volatility and quick returns." },
        { letter: "B", text: "Regular interest payments." },
        { letter: "C", text: "Steady rental income and long-term appreciation." },
        { letter: "D", text: "Higher claim on assets than common stocks." }
      ],
      correctAnswer: { letter: "C", text: "Steady rental income and long-term appreciation." }
    },
    {
      text: "Which asset class typically offers a fixed dividend that is paid out before any dividends on common stocks?",
      choices: [
        { letter: "A", text: "Common Stocks" },
        { letter: "B", text: "Preferred Stocks" },
        { letter: "C", text: "Growth Stocks" },
        { letter: "D", text: "Dividend Stocks" }
      ],
      correctAnswer: { letter: "B", text: "Preferred Stocks" }
    },
    {
      text: "What does asset allocation involve?",
      choices: [
        { letter: "A", text: "Focusing on companies expected to grow at an above-average rate." },
        { letter: "B", text: "Determining the right mix of asset classes based on individual risk tolerance, investment goals, and time horizon." },
        { letter: "C", text: "Involves buying and selling stocks within a single trading day." },
        { letter: "D", text: "Prioritizing capital appreciation over dividends." }
      ],
      correctAnswer: { letter: "B", text: "Determining the right mix of asset classes based on individual risk tolerance, investment goals, and time horizon." }
    },
    {
      text: "Which asset class is characterized by steady income through interest payments and return of principal at maturity?",
      choices: [
        { letter: "A", text: "Stocks" },
        { letter: "B", text: "Bonds" },
        { letter: "C", text: "Real Estate" },
        { letter: "D", text: "Commodities" }
      ],
      correctAnswer: { letter: "B", text: "Bonds" }
    }
  ];

  const riskQuestions = async () => {
    try {
        const existingQuestions = await Question.find({})
        if (existingQuestions.length === 0) {
            await Question.insertMany(questionsData)
            console.log('Risk questions insrted successfully')
        }
    } catch (err) {
        console.error('Error initializing questions:', error);
    }
  }

  (async () => {
    await riskQuestions();
  })()

  module.exports = riskQuestions