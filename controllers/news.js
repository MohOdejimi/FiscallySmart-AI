require('dotenv').config({path: './config/.env'})

const axios = require('axios')

module.exports = {
    getNews: (req, res) => {
        res.render('news.ejs')
        
    },
    fetchNews: async (req, res) => {
        try {
          const key = process.env.ALPHA_VANTAGE_KEY;
          const symbol = req.query.symbol;          
          const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&sort=LATEST&limit=3&apikey=${key}`;
      
          const response = await axios.get(url, {
            headers: { "User-Agent": "FiscallySmartAI" }, 
          });
      
          if (!response.data.hasOwnProperty('Note')) { 
            res.json(response.data);
          } else {
            console.error("Error:", response.data.Note);
            res.status(500).send("Error fetching news"); 
          }
        } catch (err) {
          console.error("Error:", err);
          res.status(500).send("Server error");
        }
      }
      
}