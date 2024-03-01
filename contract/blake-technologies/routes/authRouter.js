const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//The signup route is only going to be made available through a backend service (postman) or a new user can be directly added to the database through the mongodb atlas website; no new employees can 'signup' through the website.
authRouter.post('/signup', async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if(existingUser){
            res.status(400)
            return next(new Error('That email is already in use'))
        }
        const newUser = new User(req.body); //The required req.body values are email, password, firstName, and lastName. 'employeeSince' is defaulted to when the signup occurs and 'isAdmin' is defaulted to false, so if an employee needs admin access then 'isAdmin: true' needs to be added to the req.body value.
        const savedUser = await newUser.save();
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
        return res.status(201).send({ token, user: savedUser.withoutPassword() });
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

//The login route will be available to employees through the company website login section. Will render the employee portal. 
authRouter.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        if(!user){
            res.status(400)
            return next(new Error('Email and/or Password incorrect'))
        }
        const isMatch = await user.checkPassword(req.body.password)
        if(!isMatch){
            res.status(403)
            return next(new Error('Email and/or Password incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user})
    } catch {
        res.status(500)
        return next(err)
    }
})

module.exports = authRouter