const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../../middleware/auth')
const quizController = require('../../controllers/quiz/quiz')


router.get('/stocks', ensureAuth, quizController.getStock)
router.get('/bonds', ensureAuth, quizController.getBond)
router.get('/etf', ensureAuth, quizController.getEtf)
router.get('/intro-investing', ensureAuth, quizController.getIntroToInvesting)
router.get('/risk-return', ensureAuth, quizController.getRiskAndReturn)

router.post('/stocks', ensureAuth, quizController.postStock)
router.post('/bonds', ensureAuth, quizController.postBond)
router.post('/etf', ensureAuth, quizController.postEtf)
router.post('/intro-investing', ensureAuth, quizController.postIntroToInvesting)
router.post('/risk-return', ensureAuth, quizController.postRiskAndReturn)

module.exports = router