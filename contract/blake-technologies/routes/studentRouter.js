const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/student.js')

studentRouter.get('/', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const students = await Student.find()
        return res.status(200).send(students)
    }catch(err){
        res.status(500)
        return next(err)
    }
})
studentRouter.delete('/:studentId', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const deletedStudent = await Student.findByIdAndDelete(req.params.studentId)
        return res.status(200).send(deletedStudent)
    }catch(err){
        console.log(err)
    }
})
studentRouter.put('/:studentId', async (req,res, next) => {
    try{
        req.body.user = req.auth_id
        const updatedStudent = await Student.findOneAndUpdate(
            {_id: req.params.studentId},
            req.body,
            {new: true}
        ).exec();
        res.status(201).send(updatedStudent)
    }catch(err){
        console.log(err)
    }
})

module.exports = studentRouter