const mongoose = require('mongoose')

const placeschema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true,
        unique: true
    },
    placeRating: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    images: {
        type: [{ img: Buffer }]
    },
    userReviews: {
        type: [{ 
            body: String, 
            date: { type: Date, default: Date.now }, 
            user: { type: mongoose.Types.ObjectId, ref: 'User' } // Correct ref for user
        }],
    },
    mainAttractions: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Attraction' }] // Correct ref placement
    },
    famousFood: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Food' }] // Correct ref placement
    },
    availableGuides: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Guide' }] // Correct ref placement
    },
    availableTransport: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Transport' }] // Correct ref placement
    }
})

module.exports = mongoose.model("Place",placeschema)