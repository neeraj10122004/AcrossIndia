const mongoose = require('mongoose')

const guideschema = new mongoose.Schema({
    guidename : {
        type: String,
        required: true
    },
    experience : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    cost  : {
        type: Number,
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

module.exports = mongoose.model("Guide",guideschema)