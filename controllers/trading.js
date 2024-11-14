const TransactionSchema = require('../models/Trades/transaction')
const PortfolioSchema = require('../models/Trades/portfolios')
const axios = require('axios');
const SymbolsInfoSchema = require('../models/Trades/symbol')
const TradeActions = require('../models/Trades/buyAndSell')
const User = require('../models/Users'); 
const CurrentBalanceSchema = require('../models/Trades/currentBalance')
const DailyProfitLossSchema = require('../models/Trades/DailyProfitLoss');

async function getPrevData(symbol) {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getPage: async (req, res) => {
    const userID = req.user.id;
  
    const currentDate = new Date();
    const previousDate = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));
    const formattedPreviousDate = previousDate.toISOString().slice(0, 10);
  
    let amountInvested = 0;
    let symbols = [];

    const transactions = await TransactionSchema.find({ userID: userID });
    transactions.forEach(transaction => {
      amountInvested += transaction.amountInvested;
      symbols.push(transaction.symbol);
    });
    
    const userbalance = await CurrentBalanceSchema.find({ userID: userID });
    if(userbalance.length === 0) {
      const newUserBalance = new CurrentBalanceSchema({
        userID: req.user.id,
        currentBalance: 1000000, 
        amountInvested: 0
      })
      await newUserBalance.save()
    }   
 
    const currentBalance = (userbalance[0]).currentBalance - amountInvested
    const filter = {userID: req.user.id };
    const update = { $set: { currentBalance: currentBalance, amountInvested: amountInvested } };
    const updatedBalance = await CurrentBalanceSchema.updateOne(filter, update);

    async function getCurrentData(symbol) {
      try {
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB}`);
        return response.data;
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.error(`Data not found for ${symbol}:`, err.response.data.message);
          return { status: 'NOT_FOUND', symbol, message: err.response.data.message };
        } else {
          console.error(`Error fetching data for ${symbol}:`, err);
          return { status: 'ERROR', symbol, message: err.message };
        }
      }
    }
    const fetchAllData = async (symbols, batchSize = 5) => {
      const batches = [];
      for (let i = 0; i < symbols.length; i += batchSize) {
        const batch = symbols.slice(i, i + batchSize).map(getCurrentData);
        batches.push(Promise.all(batch));
      }
      return (await Promise.all(batches)).flat();
    };
    
    try {
      const result = await fetchAllData(symbols);
      for(let i = 0; i < result.length; i++) {
        let resultDetails = result[i]
        if (resultDetails.o && resultDetails.c && resultDetails.pc) {
          const currentDetails = await TransactionSchema.findOne({ userID: userID, symbol: symbols[i] });
          const currentValue = resultDetails.c * currentDetails.shares;
          const investedValue = currentDetails.entryPrice * currentDetails.shares;
          const netGainLoss = currentValue - investedValue;

          const updatedPosition = await PortfolioSchema.findOneAndUpdate(
            { userID, symbol: symbols[i] },
            {
              userID,
              goalID: currentDetails.goalID,
              symbol: symbols[i],
              currentValue,
              holdings: currentDetails.shares,
              entryPrice: currentDetails.entryPrice,
              currentPrice: resultDetails.c,
              gain: netGainLoss > 0 ? netGainLoss : 0,
              loss: netGainLoss < 0 ? -netGainLoss : 0,
            },
            { new: true, upsert: true }
          );
        }
      }

    } catch (err) {
      console.error('Error processing data:', err);
    }

    const today = new Date().toISOString().slice(0, 10);
    const DayBalance = await DailyProfitLossSchema.findOne({ userID, date: today });

    let totalGainLoss = 0;
    const assets = await PortfolioSchema.find({ userID })
    const filteredAssets = assets.filter(asset => asset.holdings > 0)

    for (const asset of assets) {
      const currentValue = asset.currentPrice * asset.holdings;
      const investedValue = asset.entryPrice * asset.holdings;
      totalGainLoss += currentValue - investedValue;
    }
    
    if (!DayBalance) {
      const newGainLoss = new DailyProfitLossSchema({
        userID: userID,
        date: today,
        gainLoss: totalGainLoss
      });
      await newGainLoss.save();
    }

    const last5DaysData = await DailyProfitLossSchema.find({ userID })
    .sort({ date: -1 })
    .limit(5)
    .select('date gainLoss');

    const chartData = last5DaysData.map((entry) => ({
      x: entry.date.toISOString().split('T')[0], 
      y: entry.gainLoss
    }));

    res.render('trading.ejs', {
      currentBalance: Math.floor(currentBalance),
      amountInvested: Math.floor(amountInvested),
      assets: filteredAssets,
      data: JSON.stringify(chartData)
  });
  },
  postTrade: async (req, res) => {
    try {
      const symbol = (req.body.symbol).toUpperCase()
      const qty = req.body.quantity
      const currentDate = new Date()
      const userID = req.user.id

      if(typeof symbol !== 'string') res.redirect('/trading')
        
      const currentPosition = await TransactionSchema.findOne({ userID: userID, symbol: symbol });

      if (currentPosition) {
        const shares = Number(qty);
        const newShares = currentPosition.shares + shares;
        const newAmountInvested = currentPosition.amountInvested + (shares * currentPosition.entryPrice);
        const quote = await getPrevData(symbol)
        const entryPrice = quote?.data?.o || currentPosition.entryPrice

        await TransactionSchema.findOneAndUpdate(
          { userID: userID, symbol: symbol },
          { 
            shares: newShares,
            amountInvested: newAmountInvested,
            entryPrice: entryPrice,
            goalID: currentPosition.goalID || newTrade._id
          },
          { new: true }
        );
        res.redirect('/trading')
      }
      else {
        const quote = await getPrevData(symbol)
        const entryPrice = quote?.data?.o || currentPosition.entryPrice
        const shares = Number(qty)
        const amountInvested = qty * entryPrice
        const created_at = currentDate.toISOString().slice(0, 10)

        const newTrade = new TransactionSchema({
          userID: req.user.id,
          created_at: created_at,
          symbol: symbol,
          shares: shares,
          amountInvested: amountInvested,
          entryPrice: entryPrice
        })
        newTrade.goalID = newTrade._id
        await newTrade.save()
        res.redirect('/trading')
      }
      
    } catch (error) {
      console.error('Error saving transaction:', error);
      res.redirect('/trading')
    }
  },
  makeTrade: async (req, res) => {
    try {
      const userID = req.user.id
      const goalID = req.params.id
      const userPortfolio = await PortfolioSchema.findOne({ userID, goalID })
      const quote = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${userPortfolio.symbol}&token=${process.env.FINNHUB}`)

      let positiveValue;
      let percentageGain;

      let negativeValue;
      let percentageLoss;

      if (userPortfolio.currentPrice > userPortfolio.entryPrice) {
        positiveValue = (quote.data.c - userPortfolio.entryPrice).toFixed(4)
        percentageGain = ((quote.data.c / userPortfolio.entryPrice)).toFixed(4)
      } else {
        negativeValue = (quote.data.c - userPortfolio.entryPrice).toFixed(4)
        percentageLoss = ((quote.data.c / userPortfolio.entryPrice)).toFixed(4)
      }

      // Quote Schema 
      const newSymbol = await SymbolsInfoSchema.findOneAndUpdate({userID: userID, goalID: goalID},
        { userID: userID,
          goalID: goalID,
          open: quote.data.o,
          close: quote.data.pc,
          high: quote.data.h,
          low: quote.data.l,
          currentPrice: quote.data.c,
          percentageGain: percentageGain,
          positiveValue: positiveValue,
          percentageLoss: percentageLoss,
          negativeValue: negativeValue,
          holdings: userPortfolio.holdings,
          value: userPortfolio.currentValue
        },
        { new: true, upsert: true }
      )
      const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.marketaux.com/v1/news/all?symbols=${userPortfolio.symbol}&filter_entities=true&language=en&api_token=${process.env.MARKETAUX}`);
            return response.data;
        } catch (error) {
            console.error(error);   
        }
    }

    let news;
    const main = async () => {
      news = await fetchData();
      res.render('makeTrade.ejs', {
        symbol: userPortfolio.symbol,
        id: goalID,
        currentPrice: quote.data.c,
        open: quote.data.o,
        close: quote.data.pc,
        high: quote.data.h,
        low: quote.data.l,
        data: news.data,
        percentageGain: percentageGain,
        positiveValue: positiveValue,
        percentageLoss: percentageLoss,
        negativeValue: negativeValue,
        holdings: userPortfolio.holdings,
        value: userPortfolio.currentValue
      })
    };  
    await main(); 

    } catch (err) {
      const userID = req.user.id
      const goalID = req.params.id
      const userPortfolio = await PortfolioSchema.findOne({ userID, goalID })
      const symbolInfo = await SymbolsInfoSchema.findOne({userID: req.user.id, goalID: req.params.id})
      if(symbolInfo) {
        res.render('makeTrade.ejs', {
          symbol: userPortfolio.symbol,
          id: goalID,
          currentPrice: symbolInfo.currentPrice,
          open: symbolInfo.open,
          close: symbolInfo.close,
          high: symbolInfo.high,
          low: symbolInfo.low,
          percentageGain: symbolInfo.percentageGain,
          positiveValue: symbolInfo.positiveValue,
          percentageLoss: symbolInfo.percentageLoss,
          negativeValue: symbolInfo.negativeValue,
          holdings: userPortfolio.holdings,
          value: userPortfolio.currentValue
        })
      } else {
        res.redirect(`trading/trade/${goalID}`)
      }
    }
  },
  updateTrade: async (req, res) => {
    try {
      const action = req.body.action;
      const numOFShares = Number(req.body.numOFShares);
      const userID = req.user.id;
      const goalID = req.params.id;
  
      const symbolInfo = await SymbolsInfoSchema.findOne({ userID, goalID });
      if (!symbolInfo) {
        return res.redirect(`/trading/trade/${goalID}`);
      }
  
      let newHoldings, newValue;
  
      if (action === 'buy') {
        newHoldings = symbolInfo.holdings + numOFShares;
        newValue = symbolInfo.value + (numOFShares * symbolInfo.currentPrice);
      } else {
        if (numOFShares > symbolInfo.holdings) return res.redirect(`/trading/trade/${goalID}`);
        newHoldings = symbolInfo.holdings - numOFShares;
        newValue = symbolInfo.value - (numOFShares * symbolInfo.currentPrice);
      }
  
      await SymbolsInfoSchema.updateOne(
        { userID, goalID },
        { $set: { holdings: newHoldings, value: newValue } },
        { new: true, upsert: true }
      );
  
      await PortfolioSchema.updateOne(
        { userID, goalID },
        { $set: { holdings: newHoldings, currentValue: newValue } }
      );
  
      const transactionInfo = await TransactionSchema.findOne({ userID, goalID });
      if (transactionInfo) {
        await TransactionSchema.updateOne(
          { userID, goalID },
          { $set: { shares: newHoldings, amountInvested: transactionInfo.amountInvested + (numOFShares * symbolInfo.currentPrice) } }
        );
      }
  
      await new TradeActions({
        userID,
        action,
        units: numOFShares,
        symbol: symbolInfo.symbol
      }).save();
  
      res.redirect(`/trading/trade/${goalID}`);
    } catch (err) {
      console.error('Error updating trade:', err);
      res.status(500).send('Error updating trade');
    }
  }
}