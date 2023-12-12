const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')


authRouter.post('/signup', async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ username: req.body.email });
        if(existingUser){
            res.status(400)
            return next(new Error('That email is already in use'))
        }
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
        return res.status(201).send({ token, user: savedUser.withoutPassword() });
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

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