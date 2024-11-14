const express = require('express')
const router = express.Router()
const goalsController = require('../controllers/goals')
const { ensureAuth } = require('../middleware/auth')



router.get('/', ensureAuth, goalsController.getGoalsPage)

router.get('/1', ensureAuth, goalsController.getPlan1)
router.post('/1', ensureAuth, goalsController.postPlan1)
router.get('/1/:id', ensureAuth, goalsController.getSingleBusinessGoal)
router.put('/1/:id', ensureAuth, goalsController.addMoneyBusinessGoal)

router.get('/2', ensureAuth, goalsController.getPlan2)
router.post('/2', ensureAuth, goalsController.postPlan2)
router.get('/2/:id', ensureAuth, goalsController.getSingleHome)
router.put('/2/:id', ensureAuth, goalsController.saveMoneyForHome)

router.get('/3', ensureAuth, goalsController.getPlan3)
router.post('/3', ensureAuth, goalsController.postPlan3)
router.get('/3/:id', ensureAuth, goalsController.getSchoolPlan)
router.put('/3/:id', ensureAuth, goalsController.saveMoneyForSchool)

router.get('/4', ensureAuth, goalsController.getPlan4)
router.post('/4',ensureAuth, goalsController.postPlan4)
router.get('/4/:id', ensureAuth, goalsController.getTravelPlan)
router.put('/4/:id', ensureAuth, goalsController.saveMoneyForVacation)

router.get('/5', ensureAuth, goalsController.getPlan5)
router.post('/5', ensureAuth, goalsController.postPlan5)
router.get('/5/:id', ensureAuth, goalsController.getKidsPlan)
router.put('/5/:id', ensureAuth, goalsController.saveMoneyForKids)

router.get('/6', ensureAuth, goalsController.getPlan6)
router.post('/6', ensureAuth, goalsController.postPlan6)
router.get('/6/:id', ensureAuth, goalsController.getRentPlan)
router.put('/6/:id', ensureAuth, goalsController.saveMoneyForRent)


module.exports = router