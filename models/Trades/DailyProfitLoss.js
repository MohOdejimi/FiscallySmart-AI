const mongoose = require('mongoose');

const DailyProfitLossSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  gainLoss: { type: Number, required: true }
});

module.exports = mongoose.model('DailyProfitLoss', DailyProfitLossSchema);
