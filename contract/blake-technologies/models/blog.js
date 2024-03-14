const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    img: {
        type: 
    }
})

module.exports = mongoose.model('Blog', blogSchema)