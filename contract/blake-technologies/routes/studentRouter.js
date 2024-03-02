const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/student.js')

studentRouter.post('/', async (req, res, next) => {
    try{
        const newStudent = await new Student(req.body)
        const savedStudent = await newStudent.save()
        res.status(201).send(savedStudent)
    }catch(err){
        res.status(500)
        next(err)
    }
})