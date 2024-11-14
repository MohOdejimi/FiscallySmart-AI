const express = require('express')
const router = express.Router()
const tradingController = require('../controllers/trading')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, tradingController.getPage)
router.post('/', ensureAuth, tradingController.postTrade)
router.get('/trade/:id', ensureAuth, tradingController.makeTrade)
router.put('/trade/:id', ensureAuth, tradingController.updateTrade)

module.exports = router