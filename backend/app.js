const express = require('express')
const mongoose = require('mongoose')
const {PORT,MONGOURL} = require('./auth')
mongoose.connect(MONGOURL)
const User = require('./models/Usermodel')
const Place = require('./models/Placemodel')
const Attraction = require('./models/Attractionmodel')
const Food = require('./models/Foodmodel')
const Transport = require('./models/Transportmodel')
const Guide = require('./models/Guidemodel')
const app = express()

app.use(express.json())
app.listen(PORT,()=>{
    console.log(`listening on post ${PORT}`)
})

app.post('/', async (req,res)=>{
    const {email,password} = req.body
    try{
        let user = await User.findOne({email: email})

        if(!user){

            let user = new User({email,password})

            await user.save()

            res.send("Success")

        }
        else{
            res.send("user exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})

app.post('/place', async (req,res)=>{
    const {placename,placerating,placelikes} = req.body
    try{
        let place = await Place.findOne({placeName:placename})

        if(!place){

            let place = new Place({ placeName:placename,placeRating:placerating,likes:placelikes})

            await place.save()

            res.send("Success")

        }
        else{
            res.send("data exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})

app.post('/attraction', async (req,res)=>{
    const {attractionname,description,rating} = req.body
    try{
        let attraction = await Attraction.findOne({attractionName:attractionname})

        if(!attraction){

            let attraction = new Attraction({ attractionName:attractionname,description:description,rating:rating})

            await attraction.save()

            res.send("Success")

        }
        else{
            res.send("data exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})
app.post('/food', async (req,res)=>{
    const {foodname,fooddescription,cost,rating,resturantdetails} = req.body
    try{
        let food = await Food.findOne({foodName: foodname})

        if(!food){

            let food = new Food({ foodName : foodname,foodDescription : fooddescription,cost: cost,rating : rating,resturantDetails: resturantdetails})

            await food.save()

            res.send("Success")

        }
        else{
            res.send("data exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})
app.post('/guide', async (req,res)=>{
    const {name,experience,rating,cost} = req.body
    try{
        let guide = await Guide.findOne({guidename : name})

        if(!guide){

            let guide = new Guide({ guidename : name,experience : experience ,rating : rating,cost : cost})

            await guide.save()

            res.send("Success")

        }
        else{
            res.send("data exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})

app.post('/transport', async (req,res)=>{
    const {description,cost,rating,owner} = req.body
    try{
        let transport = await Transport.findOne({transportDescription : description})

        if(!transport){

            let transport = new Transport({ transportDescription : description,cost : cost ,rating : rating,ownerDetails : owner})

            await transport.save()

            res.send("Success")

        }
        else{
            res.send("data exists")
        }
    }
    catch{
        res.send("Server Error")
    }
    
})