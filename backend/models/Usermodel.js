const mongoose = require('mongoose')
const { stringify } = require('querystring')

const userschema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model("User",userschema)