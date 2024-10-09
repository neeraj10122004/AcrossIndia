const mongoose = require('mongoose')

const foodschema = new mongoose.Schema({
    foodName : {
        type: String,
        required: true
    },
    foodDescription : {
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
    resturantDetails: {
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

module.exports = mongoose.model("Food",foodschema)