const express = require('express')
const yardRouter = express.Router()
const Location = require('../models/location')
const Item = require('../models/item.js')

//token && get all locations
yardRouter.get('/', async (req, res, next) => {
    try {
        const location = await Location.find()
        return res.status(200).send(location)
    } catch(err) {
        res.status(500)
        return next(err)
    }
})

//token && user && get locations based on proximity
codeRouter.get('/user', async (req, res, next) => {
    try {
        const codes = await Code.find({ user: req.auth._id })
        res.status(200).send(codes)       
    } catch(err) {
        res.status(500)
        next(err)
    } 
})

//token && get items from location id
yardRouter.get('/:locationId', async (req, res, next) => {
    try {
        const location = await Code.find({ location: req.params._id })
        res.status(200).send(codes)       
    } catch(err) {
        res.status(500)
        next(err)
    } 
})

//token && user && post location 


//token && user && post items to location + user id


//token && user && delete location


//token && user && edit location


//token && user && edit items of location + user id

module.exports = yardRouter