const mongoose = require('mongoose')

const transportschema = new mongoose.Schema({
    transportDescription : {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    rating : {
        type: Number,
        required: true
    }
    ,
    ownerDetails: {
        type: String,
        required: true
    },
    userReviews: {
        type: [{ 
            body: String, 
            date: { type: Date, default: Date.now }, 
            user: { type: mongoose.Types.ObjectId, ref: 'User' } // Correct ref for user
        }],
    }
})

module.exports = mongoose.model("Transport",transportschema)