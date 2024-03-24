const express = require('express')
const businessRouter = express.Router()
const Business = require('../models/business.js')

businessRouter.get('/', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const businesses = await Business.find()
        return res.status(200).send(businesses)
    }catch(err){
        res.status(500)
        return next(err)
    }
})
businessRouter.delete('/:businessId', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const deletedBusiness = await Business.findByIdAndDelete(req.params.businessId)
        return res.status(200).send(deletedBusiness)
    }catch(err){
        console.log(err)
    }
})
businessRouter.put('/:businessId', async (req,res, next) => {
    try{
        req.body.user = req.auth_id
        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: req.params.businessId},
            req.body,
            {new: true}
        ).exec();
        res.status(201).send(updatedBusiness)
    }catch(err){
        console.log(err)
    }
})
businessRouter.put('/:businessId/note', async (req,res, next) => {
    try{
        req.body.user = req.auth_id
        const updatedBusiness = await Business.findOneAndUpdate(
            {_id: req.params.businessId},
            req.body,
            {new: true}
        ).exec();
        res.status(201).send(updatedBusiness)
    }catch(err){
        console.log(err)
    }
})

module.exports = businessRouter