const express = require('express')
const yardRouter = express.Router()
const Location = require('../models/location')
const Item = require('../models/item.js')
const User = require('../models/user.js')

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
yardRouter.get('/user', async (req, res, next) => {
    try {
        const location = await Location.find({ location: req.params._id })
        res.status(200).send(codes)       
    } catch(err) {
        res.status(500)
        next(err)
    } 
})

//token && get items from location id
yardRouter.get('/:locationId', async (req, res, next) => {
    try {
        const location = await Code.find({ location: req.params.locationId })
        res.status(200).send(location)       
    } catch(err) {
        res.status(500)
        next(err)
    } 
})

//token && user && post location 
yardRouter.post('/locaiton', async (req, res, next) => {
    try{

    }catch(err){
        res.status(500)
        next(err)
    }
})


//token && user && post items to location + user id
yardRouter.post('/item', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const newItem = new Item(req.body)
        const savedItem = await newItem.save()
        res.status(201).send(savedItem)
    } catch(err){
        res.status(500)
        next(err)
    }
})


//token && user && delete location


//token && user && edit location


//token && user && edit items of location + user id

module.exports = yardRouter