const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

async function connectToDB(){
    try{
        await mongoose.connect('mongodb+srv://blakekvarfordt:cakvaw-tavcuB-5miwsy@cluster0.05cexxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(4000, () => {
    console.log('server running on local port 4000')
})