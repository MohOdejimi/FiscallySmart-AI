const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const newsController = require('../controllers/news')

router.get('/', ensureAuth, newsController.getNews)

module.exports = router