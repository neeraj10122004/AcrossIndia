const mongoose = require('mongoose')

const attractionschema = new mongoose.Schema({
    attractionName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userReviews: {
        type: [{ 
            body: String, 
            date: { type: Date, default: Date.now }, 
            user: { type: mongoose.Types.ObjectId, ref: 'User' }  // Correct ref for User
        }]
    }
})

module.exports = mongoose.model("Attraction",attractionschema)