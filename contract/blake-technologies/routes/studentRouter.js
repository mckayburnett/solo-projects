const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/student.js')

studentRouter.get('/', async (req, res, next) => {
    try{
        const students = await Student.find()
        return res.status(200).send(students)
    }catch(err){
        res.status(500)
        return next(err)
    }
})

module.exports = studentRouter