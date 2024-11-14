const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const learnController = require('../controllers/learn')

router.get('/', ensureAuth, learnController.getLearningPage)
router.get('/stocks', ensureAuth, learnController.getStockPage)
router.get('/bonds', ensureAuth, learnController.getBondPage)
router.get('/etf' , ensureAuth, learnController.getEtf)
router.get('/intro', learnController.getIntroToInvesting)
router.get('/risk', learnController.getRiskPage)






module.exports = router
