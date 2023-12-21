const express = require('express')
const codeRouter = express.Router()
const Code = require('../models/code')

//get all qr codes
codeRouter.get('/', async (req, res, next) => {
    try {
        const codes = await Code.find()
        return res.status(200).send(codes)
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

//get by user
codeRouter.get('/user', async (req, res, next) => {
    try {
        const codes = await Code.find({ user: req.auth._id })
        res.status(200).send(codes)       
    } catch(err) {
        res.status(500)
        next(err)
    } 
})
// codeRouter.get('/user', (req, res, next) => {
//     Code.find({user:req.auth._id}, (err, codes) =>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(codes)
//     })
// })

//create qr code
codeRouter.post('/', async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newCode = await new Code(req.body)
        const savedCode = await newCode.save()
        res.status(201).send(savedCode)
    } catch (err) {
        res.status(500)
        next(err)
    }
})

codeRouter.delete('/:codeId', async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const deletedCode = await Code.findByIdAndDelete(req.params.codeId)
        return res.status(200).send(deletedCode)
    } catch(err) {
        console.log(err)
    }
})

module.exports = codeRouter