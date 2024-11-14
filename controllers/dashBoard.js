const Plan = require('../models/goals/Plans')

module.exports = {
    getDashboard: async (req, res) => {
        const currentDate = new Date();
        const userId = req.user._id;
        const userPlans = await Plan.find({ userId: userId }).sort({ created_at: -1 });
        console.log(userPlans)

        res.render('dashboard.ejs', { 
            username: req.user.username, 
            currentDate: currentDate,
            plans: userPlans
        })
    }
}