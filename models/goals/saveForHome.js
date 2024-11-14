const mongoose = require('mongoose');

const saveForHomeSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model('saveforhome', saveForHomeSchema);