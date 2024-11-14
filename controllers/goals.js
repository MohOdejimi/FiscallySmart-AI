const StartingBusiness = require('../models/goals/startingBusiness')
const BusinessActivities = require('../models/goals/businessActivity')
const SaveForHome = require('../models/goals/saveForHome')
const HomeActivities = require('../models/goals/homeActivity')
const SaveForSchool = require('../models/goals/saveForSchool')
const SchoolActivities = require('../models/goals/schoolActivity')
const SaveForVacation= require('../models/goals/saveForVacation')
const VacationActivities = require('../models/goals/vacationActivity')
const SaveForKids = require('../models/goals/saveForKids')
const KidsActivities = require('../models/goals/kidsActivity')
const SaveForRent = require('../models/goals/saveForRent')
const RentActivities = require('../models/goals/rentActivity')
const Plan = require('../models/goals/Plans')
const UserAmounts = require('../models/goals/amounts')



module.exports = {
    getGoalsPage: (req, res) => {
        res.render('goals.ejs')
    },
    getPlan1: async (req, res) => {
        res.render('startingBusiness.ejs')
    },
    getPlan2: async (req, res) => {
        res.render('buyhome.ejs')
    },
    getPlan3: async(req, res) => {
        res.render('school.ejs')
    },
    getPlan4: async (req, res) => {
        res.render('vacation.ejs')
    },
    getPlan5: async (req, res) =>  {
        res.render('kids.ejs')
    },
    getPlan6: async (req, res) => {
        res.render('rent.ejs')
    },
    getSingleBusinessGoal: async(req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await StartingBusiness.findById(goalID);
            const businessActivity = await BusinessActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('singleBusiness.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: businessActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    getSingleHome: async(req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await SaveForHome.findById(goalID);
            const businessActivity = await HomeActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('singleHome.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: businessActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    getSchoolPlan: async (req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await SaveForSchool.findById(goalID);
            const schoolActivity = await SchoolActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('singleSchool.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: schoolActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    getTravelPlan: async (req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await SaveForVacation.findById(goalID);
            const businessActivity = await VacationActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('singleVacation.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: businessActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    getKidsPlan: async (req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await SaveForKids.findById(goalID);
            const businessActivity = await KidsActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('singleKidsPlan.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: businessActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    getRentPlan: async (req, res) => {
        const goalID = req.params.id
        const userID = req.user._id;

        try {
            const goal = await SaveForRent.findById(goalID);
            const businessActivity = await RentActivities.find({ userID, goalID });

            if (!goal) {
              return res.status(404).send('Goal not found');
            }
            const target = goal.target_amount
            const current = goal.current_amount

            const percentageAchieved = ((current / target ) * 100).toFixed(2)

            res.render('rentPlan.ejs', 
            { current_amount: goal.current_amount,
              target_amount: goal.target_amount, 
              percentageAchieved: percentageAchieved,
              name: goal.goal_name,
              id: goal._id,
              createdAt: new Date(goal.created_at).toUTCString(),
              businessActivities: businessActivity,
            });
          } catch (error) {
            res.status(500).send(error);
          }
    },
    postPlan1: async (req, res) => {
        const businessDetails = req.body 
        console.log(businessDetails)

        const newBusinessGoal = new StartingBusiness({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 1
        })
        await newBusinessGoal.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 1,
          goalID: newBusinessGoal._id
        })

        await newPlan.save()
        res.render('success.ejs', {username: req.user.username, id: newBusinessGoal._id})
    },
    postPlan2: async (req, res) => {
        const newHomePlan = new SaveForHome({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 2
        })
        await newHomePlan.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 2,
          goalID: newHomePlan._id
        })

        await newPlan.save()
        res.render('successHome.ejs', {username: req.user.username, id: newHomePlan._id})
    },
    postPlan3: async (req, res) => {
        const newSchoolPlan = new SaveForSchool({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 3
        })
        await newSchoolPlan.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 3,
          goalID: newSchoolPlan._id
        })

        await newPlan.save()
        res.render('successSchool.ejs', {username: req.user.username, id: newSchoolPlan._id})
    },
    postPlan4: async (req, res) => {
        const newVacationPlan = new SaveForVacation({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 4
        })
        await newVacationPlan.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 4,
          goalID: newVacationPlan._id
        })

        await newPlan.save()
        res.render('successVacation.ejs', {username: req.user.username, id: newVacationPlan._id})
    },
    postPlan5: async (req, res) => {
        const newKidsPlan = new SaveForKids({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 5
        })
        await newKidsPlan.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 5,
          goalID: newKidsPlan._id
        })

        await newPlan.save()
        res.render('successKids.ejs', {username: req.user.username, id: newKidsPlan._id})
    },
    postPlan6: async (req, res) => {
        const newRentPlan = new SaveForRent({
            userId: req.user.id,
            goal_name: req.body.name,
            target_amount: req.body.target_amount,
            current_amount: 0,
            target_date: req.body.target_date,
            id: 6
        })
        await newRentPlan.save()

        const newPlan = new Plan({
          userId: req.user.id,
          goal_name: req.body.name,
          target_amount: req.body.target_amount,
          current_amount: 0,
          target_date: req.body.target_date,
          id: 6,
          goalID: newRentPlan._id
        })

        await newPlan.save()
        res.render('successRent.ejs', {username: req.user.username, id: newRentPlan._id})
    },
    addMoneyBusinessGoal: async (req, res) => {
        const goalID = req.params.id
        const current_amount = Number(req.body.current_amount)
        const { action } = req.body;
        const goal = await StartingBusiness.findById( goalID )

        if(action === 'add') {
          const BusinessActivity = new BusinessActivities({
            add: current_amount,
            goalID: req.params.id,
            userID: req.user.id
        })

        await BusinessActivity.save()

        goal.current_amount += current_amount
        
        const amount = new UserAmounts({
          currentAmount: goal.current_amount,
          userID: req.user.id,
          goalID: goalID
        })

        await amount.save()

        await goal.save()
        res.redirect(`/goals/1/${goalID}`)
        } else {
          const BusinessActivity = new BusinessActivities({
            withdraw: current_amount,
            goalID: req.params.id,
            userID: req.user.id
        })

        await BusinessActivity.save()

        goal.current_amount -= current_amount
        const amount = new UserAmounts({
          currentAmount: goal.current_amount,
          userID: req.user.id,
          goalID: goalID
        })

        await amount.save()
        await goal.save()

        res.redirect(`/goals/1/${goalID}`)
          
      }
    },
    saveMoneyForHome: async (req, res) => {
      const goalID = req.params.id
      const current_amount = Number(req.body.current_amount)
      const { action } = req.body;
      const goal = await SaveForHome.findById( goalID )
      console.log(goal)

      if(action === 'add') {
        const HomeActivity = new HomeActivities({
          add: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await HomeActivity.save()

      goal.current_amount += current_amount
      await goal.save()

      res.redirect(`/goals/2/${goalID}`)
      } else {
        const HomeActivity = new HomeActivities({
          withdraw: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await HomeActivity.save()

      goal.current_amount -= current_amount
      await goal.save()

      res.redirect(`/goals/2/${goalID}`)
        
    }
    },
    saveMoneyForSchool: async (req, res) => {
      const goalID = req.params.id
      const current_amount = Number(req.body.current_amount)
      const { action } = req.body;
      const goal = await SaveForSchool.findById( goalID )

      if(action === 'add') {
        const SchoolActivity = new SchoolActivities({
          add: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await SchoolActivity.save()

      goal.current_amount += current_amount
      await goal.save()

      res.redirect(`/goals/3/${goalID}`)
      } else {
        const SchoolActivity = new SchoolActivities({
          withdraw: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await SchoolActivity.save()

      goal.current_amount -= current_amount
      await goal.save()

      res.redirect(`/goals/3/${goalID}`)
        
    }
    },
    saveMoneyForVacation: async (req, res) => {
      const goalID = req.params.id
      const current_amount = Number(req.body.current_amount)
      const { action } = req.body;
      const goal = await SaveForVacation.findById( goalID )

      if(action === 'add') {
        const VacationActivity = new VacationActivities({
          add: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await VacationActivity.save()

      goal.current_amount += current_amount
      await goal.save()

      res.redirect(`/goals/4/${goalID}`)
      } else {
        const VacationActivity = new VacationActivities({
          withdraw: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await VacationActivity.save()

      goal.current_amount -= current_amount
      await goal.save()

      res.redirect(`/goals/4/${goalID}`)
        
    }
    },
    saveMoneyForKids: async (req, res) => {
      const goalID = req.params.id
      const current_amount = Number(req.body.current_amount)
      const { action } = req.body;
      const goal = await SaveForKids.findById( goalID )

      if(action === 'add') {
        const KidsActivity = new KidsActivities({
          add: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await KidsActivity.save()

      goal.current_amount += current_amount
      await goal.save()

      res.redirect(`/goals/5/${goalID}`)
      } else {
        const KidsActivity = new KidsActivities({
          withdraw: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await KidsActivity.save()

      goal.current_amount -= current_amount
      await goal.save()

      res.redirect(`/goals/5/${goalID}`)
        
    }
    },
    saveMoneyForRent: async (req, res) => {
      const goalID = req.params.id
      const current_amount = Number(req.body.current_amount)
      const { action } = req.body;
      const goal = await SaveForRent.findById( goalID )

      if(action === 'add') {
        const RentActivity = new RentActivities({
          add: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await RentActivity.save()

      goal.current_amount += current_amount
      await goal.save()

      res.redirect(`/goals/6/${goalID}`)
      } else {
        const RentActivity = new RentActivities({
          withdraw: current_amount,
          goalID: req.params.id,
          userID: req.user.id
      })

      await RentActivity.save()

      goal.current_amount -= current_amount
      await goal.save()

      res.redirect(`/goals/6/${goalID}`)
        
    }
  }  
}