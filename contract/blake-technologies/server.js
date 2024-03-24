const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')
const Student = require('./models/student.js')
const Business = require('./models/business.js')


app.use(express.json())
app.use(morgan('dev'))

async function connectToDB(){
    try{
        await mongoose.connect(`mongodb+srv://blakekvarfordt:${process.env.PASSWORD}@cluster0.05cexxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}
connectToDB()

//These are the only student and business requests that don't require '/api' because we're receiving the post from the 'Contact Us' section of the client-side.
app.post('/student', async (req, res, next) => {
    try{
        const newStudent = new Student(req.body)
        const savedStudent = await newStudent.save()
        res.status(201).send(savedStudent)
    }catch(err){
        res.status(500)
        next(err)
    }
})
app.post('/business', async (req, res, next) => {
    try{
        const newBusiness = new Business(req.body)
        const savedBusiness = await newBusiness.save()
        res.status(201).send(savedBusiness)
    }catch(err){
        res.status(500)
        next(err)
    }
})

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/student', require('./routes/studentRouter.js'))
app.use('/api/business', require('./routes/businessRouter.js'))
app.use('/api/blog', require('./routes/blogRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(3000, () => {
    console.log('server running on local port 3000')
})