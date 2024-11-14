const express = require('express')
const router = express.Router()
const mainControllers = require('../controllers/main')
const authControllers = require('../controllers/auth')
const newsController = require('../controllers/news')
const resultController = require('../controllers/result/result')
const { ensureAuth } = require('../middleware/auth')
const { ensureGuest } = require('../middleware/ensureGuest')



router.get('/', ensureGuest,  mainControllers.getIndex)
router.get('/login', authControllers.getLogin)
router.get('/logout', authControllers.getLogout)
router.get('/signup', authControllers.getSignup)
router.post('/login', authControllers.postLogin)
router.post('/signup', authControllers.postSignup)
router.get('/stock-news', ensureAuth, newsController.fetchNews)

// quiz results 
router.get('/stock-result', resultController.getStock)
router.get('/bond-result', resultController.getBond)
router.get('/etf-result', resultController.getEtf)
router.get('/intro-investing-result', resultController.getIntroToInvesting)
router.get('/risk-return-result', resultController.getRiskAndReturn)


module.exports = router 