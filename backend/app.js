const express = require('express')
const mongoose = require('mongoose')
const {PORT,MONGOURL} = require('./auth')
mongoose.connect(MONGOURL)
const User = require('./models/Usermodel')
const { execPath } = require('process')
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