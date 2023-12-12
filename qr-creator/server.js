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
        mongoose.connect('mongodb+srv://mckayburnett:7%40-GM4y.n6Tsrj7@cluster0.b2twtxz.mongodb.net/qrDataBase?retryWrites=true&w=majority')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/code', require('./routes/codeRouter.js'))

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