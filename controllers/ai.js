const PortfolioSchema = require('../models/Trades/portfolios')
const Users = require('../models/Users')
const { GoogleGenerativeAI } = require('@google/generative-ai');


module.exports = {
    getResponse: async (req, res) => {
        const userID = req.user.id
        const trades = await PortfolioSchema.find({ userID: userID})
        const userName = await Users.findOne({_id: userID}).username
        try {
            if (trades.length === 0) {
                return res.status(404).send('You are yet to make your first investment');
              }

              const prompt = `
              Given the following stock trades of a user:
              ${trades.map(trade => `
                - Symbol: ${trade.symbol}
                - Current Price: $${trade.currentPrice.toFixed(2)}
                - Current Value: $${trade.currentValue.toFixed(2)}
                - Entry Price: $${trade.entryPrice.toFixed(2)}
                - Gain: $${trade.gain.toFixed(2)}
                - Holdings: ${trade.holdings}
              `).join('\n')}
              
              Please provide an analysis with insights and financial suggestions. Format the response for rendering inside an HTML <div> element. The response should include the following:
              Analyze and provide brief insights, each are STRICTLY limited to 175-225 characters.
              1. <strong>Assessment of Trade Performance:</strong>
                 - Detailed performance of each trade in bullet points using <ul> tags
              2. <strong>Recommendations for Improving Trading Strategy:</strong>
                 - Provide 2, clearly listed with <ol> tags
              3. <strong>Financial Suggestions:</strong>
                 - Provide financial suggestions with <ul> tags
              
              Make sure the response is formatted properly with HTML tags so it can be directly rendered in a <div> element. 
              Also make your response sound conversational and professional.
              Style your response with line-height and a little bit of padding. 
              When providing suggestions, give alternative stock options for low performing stocks.
              Set the fontsize of the analysis not the headline to be 0.8em; Your response 
              should be formated in a way that you are comminicating with the investor.
              
              If the trades array is empty, inform the user that they are yet to make their first investment or stock purchase.`; 
              
              const genAI = new GoogleGenerativeAI(process.env.GEMINI);
              const model = genAI.getGenerativeModel({ model: "gemini-pro" });        
              const result = await model.generateContent(prompt);

              const text = result.response.text();
              res.json({ analysis: text.trim() });
        } catch ( err ) {
            console.error('error', err)
            res.status(500).send('Internal Server Error')
        }
    }
}