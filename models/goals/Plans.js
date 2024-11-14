const mongoose = require('mongoose')

const PlanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    goal_name: { 
        type: String, 
        required: true 
    },
    target_amount: { 
        type: Number, 
        required: true 
    },
    current_amount: {
        type: Number, 
        required: true 
    },
    target_date: { 
        type: Date, 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    id: {
        type: Number,
        required: true
    },
    goalID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const plans = mongoose.model('plans', PlanSchema)

module.exports = plans