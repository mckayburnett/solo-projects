const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/blog.js')

blogRouter.get('/', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const blogs = await Blog.find()
        return res.status(200).send(blogs)
    }catch(err){
        res.status(500)
        return next(err)
    }
})
blogRouter.post('/', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const newPost = new Blog(req.body)
        const savedPost = newPost.save()
        return res.status(201).send(savedPost)
    }catch(err){
        res.status(500)
        return next(err)
    }
})
blogRouter.delete('/:blogId', async (req, res, next) => {
    try{
        req.body.user = req.auth._id
        const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId)
        return res.status(200).send(deletedBlog)
    }catch(err){
        console.log(err)
    }
})
blogRouter.put('/:blogId', async (req,res, next) => {
    try{
        req.body.user = req.auth_id
        const updatedBlog = await Blog.findOneAndUpdate(
            {_id: req.params.studentId},
            req.body,
            {new: true}
        ).exec();
        res.status(201).send(updatedBlog)
    }catch(err){
        console.log(err)
    }
})

module.exports = blogRouter