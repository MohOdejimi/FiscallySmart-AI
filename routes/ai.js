const express = require('express')
const router = express.Router()
const AIController = require('../controllers/ai')
const { ensureAuth } = require('../middleware/auth')

router.post('/', ensureAuth, AIController.getResponse)

module.exports = router