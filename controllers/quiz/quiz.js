const StockQuestions = require('../../models/Quiz/stockQuestions')
const BondQuestions = require('../../models/Quiz/bondQuestions');
const EtfQuestions = require('../../models/Quiz/etfQuestions')
const IntroToInvestingQuestions = require('../../models/Quiz/introToInvestingQuestions')
const RiskAndReturnQuestions = require('../../models/Quiz/riskQuestions')
const StockScore = require('../../models/Scores/stock')
const BondScore = require('../../models/Scores/bond')
const EtfScore = require('../../models/Scores/etf');
const IntroToInvestingScore = require('../../models/Scores/introToInvesting')
const RiskAndReturnScore = require('../../models/Scores/risk')



module.exports = {
    getStock: async (req, res) => {
        const questions = await StockQuestions.find();
        res.render('stockQuestions.ejs', {questions: questions}, )
    },
    getBond: async (req, res) => {
        const questions = await BondQuestions.find()
        res.render('bondQuestions.ejs', {questions: questions})
    },
    getEtf: async (req, res) => {
        const questions = await EtfQuestions.find()
        res.render('etfQuestions.ejs', {questions: questions})
    },
    getIntroToInvesting: async (req, res) => {
        const questions = await IntroToInvestingQuestions.find()
        res.render('introToInvestingQuestions.ejs', {questions: questions})
    },
    getRiskAndReturn: async (req, res) => {
        const questions = await RiskAndReturnQuestions.find()
        res.render('riskQuestions.ejs',{ questions })
    },
    postStock: async (req, res) => {
        const questions = req.body
        const userAnswers = [];

        for (const key in questions) {
        const question = questions[key];
        const letterMatch = question.match(/letter: '(\w)'/);
            if (letterMatch) {
                userAnswers.push(letterMatch[1]);
            }
        }
        const correctAnswers = []
        const questionsDB = await StockQuestions.find();
        questionsDB.forEach(question => {
            correctAnswers.push(question.correctAnswer.letter)
        })
        let userScore = 0 
        correctAnswers.forEach((option, index) => {
            if(option === userAnswers[index]) {
                userScore += 10
            }
        })

       const score = new StockScore({
        score: userScore,
        userId: req.user.id
      });
      await score.save();
      res.redirect('/stock-result')
    },
    postBond: async (req, res) => {
        const questions = req.body
        const userAnswers = [];

        for (const key in questions) {
        const question = questions[key];
        const letterMatch = question.match(/letter: '(\w)'/);
            if (letterMatch) {
                userAnswers.push(letterMatch[1]);
            }
        }
        const correctAnswers = []
        const questionsDB = await BondQuestions.find();
        questionsDB.forEach(question => {
            correctAnswers.push(question.correctAnswer.letter)
        })
        let userScore = 0 


        correctAnswers.forEach((option, index) => {
            if(option === userAnswers[index]) {
                userScore += 10
            }
       })
       
       console.log(userScore)

       const score = new BondScore({
        score: userScore,
        userId: req.user.id
      });
      await score.save();
      res.redirect('/bond-result')
    },
    postEtf: async (req, res) => {
        const questions = req.body
        const userAnswers = [];

        for (const key in questions) {
        const question = questions[key];
        const letterMatch = question.match(/letter: '(\w)'/);
            if (letterMatch) {
                userAnswers.push(letterMatch[1]);
            }
        }
        const correctAnswers = []
        const questionsDB = await EtfQuestions.find();
        questionsDB.forEach(question => {
            correctAnswers.push(question.correctAnswer.letter)
        })
        let userScore = 0 


        correctAnswers.forEach((option, index) => {
            if(option === userAnswers[index]) {
                userScore += 10
            }
       })
       
       console.log(userScore)

       const score = new EtfScore({
        score: userScore,
        userId: req.user.id
      });
      await score.save();
      res.redirect('/etf-result')
    },
    postIntroToInvesting: async (req, res) => {
        const questions = req.body
        const userAnswers = [];

        for (const key in questions) {
        const question = questions[key];
        const letterMatch = question.match(/letter: '(\w)'/);
            if (letterMatch) {
                userAnswers.push(letterMatch[1]);
            }
        }
        console.log(questions)
        const correctAnswers = []
        const questionsDB = await IntroToInvestingQuestions.find();
        questionsDB.forEach(question => {
            correctAnswers.push(question.correctAnswer.letter)
        })
        let userScore = 0 

        correctAnswers.forEach((option, index) => {
            if(option === userAnswers[index]) {
                userScore += 10
            }
       })
       
       console.log(userScore)

       const score = new IntroToInvestingScore({
        score: userScore,
        userId: req.user.id
      });
      await score.save();
      res.redirect('/intro-investing-result')
    },
    postRiskAndReturn: async (req, res) => {
        const questions = req.body
        const userAnswers = [];

        for (const key in questions) {
        const question = questions[key];
        const letterMatch = question.match(/letter: '(\w)'/);
            if (letterMatch) {
                userAnswers.push(letterMatch[1]);
            }
        }

        const correctAnswers = []
        const questionsDB = await RiskAndReturnQuestions.find();
        questionsDB.forEach(question => {
            correctAnswers.push(question.correctAnswer.letter)
        })
        let userScore = 0 

        correctAnswers.forEach((option, index) => {
            if(option === userAnswers[index]) {
                userScore += 10
            }
        })
       
       console.log(userScore)

       const score = new RiskAndReturnScore({
        score: userScore,
        userId: req.user.id
      });
      await score.save();
      res.redirect('/risk-return-result')
    }
}