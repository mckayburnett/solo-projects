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