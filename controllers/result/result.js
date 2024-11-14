const StockQuestions = require('../../models/Quiz/stockQuestions')
const StockScores = require('../../models/Scores/stock')
const BondQuestions = require('../../models/Quiz/bondQuestions')
const BondScores = require('../../models/Scores/bond')
const EtfQuestions = require('../../models/Quiz/etfQuestions')
const EtfScores =require('../../models/Scores/etf')
const IntroToInvestingQuestions = require('../../models/Quiz/introToInvestingQuestions')
const IntroToInvestingScore = require('../../models/Scores/introToInvesting')
const RiskAndReturnQuestions = require('../../models/Quiz/riskQuestions')
const RiskAndReturnScore = require('../../models/Scores/risk')


module.exports = {
    getStock: async (req, res) => {
        const questions = await StockQuestions.find();
        const userId = req.user.id; 

        const correctOptions = []
        for (const question of questions) {
            correctOptions.push(question.correctAnswer)
        }

        StockScores.find({ userId })
        .sort({ dateSaved: -1 }) 
        .limit(1) 
        .then(documents => {
            const lastDocument = documents[0];
            res.render('stockResult.ejs', {
                questions: questions, 
                result: lastDocument.score, 
                correctOptions: correctOptions})
        }) 
    },
    getBond: async (req, res) => {
        const questions = await BondQuestions.find();
        const userId = req.user.id;
        
        const correctOptions = []
        for (const question of questions) {
            correctOptions.push(question.correctAnswer)
        }
        
        BondScores.find({ userId })
        .sort({ dateSaved: -1 }) 
        .limit(1) 
        .then(documents => {
            const lastDocument = documents[0];
            res.render('bondResult.ejs', {
                questions: questions, 
                result: lastDocument.score, 
                correctOptions: correctOptions})
        })
    },
    getEtf: async (req, res) => {
        const questions = await EtfQuestions.find();
        const userId = req.user.id;
        
        const correctOptions = []
        for (const question of questions) {
            correctOptions.push(question.correctAnswer)
        }
        
        EtfScores.find({ userId })
        .sort({ dateSaved: -1 }) 
        .limit(1) 
        .then(documents => {
            const lastDocument = documents[0];
            res.render('etfResult.ejs', {
                questions: questions, 
                result: lastDocument.score, 
                correctOptions: correctOptions})
        })
    },
    getIntroToInvesting: async (req, res) => {
        const questions = await IntroToInvestingQuestions.find();
        const userId = req.user.id;
        
        const correctOptions = []
        for (const question of questions) {
            correctOptions.push(question.correctAnswer)
        }
        
        IntroToInvestingScore.find({ userId })
        .sort({ dateSaved: -1 }) 
        .limit(1) 
        .then(documents => {
            const lastDocument = documents[0];
            res.render('etfResult.ejs', {
                questions: questions, 
                result: lastDocument.score, 
                correctOptions: correctOptions})
        })
    }, 
    getRiskAndReturn: async (req, res) => {
        const questions = await RiskAndReturnQuestions.find();
        const userId = req.user.id;
        
        const correctOptions = []
        for (const question of questions) {
            correctOptions.push(question.correctAnswer)
        }
        
        RiskAndReturnScore.find({ userId })
        .sort({ dateSaved: -1 }) 
        .limit(1) 
        .then(documents => {
            const lastDocument = documents[0];
            res.render('etfResult.ejs', {
                questions: questions, 
                result: lastDocument.score, 
                correctOptions: correctOptions})
        })
    }
}