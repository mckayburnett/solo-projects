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
    content: {
        type: String,
        required: true
    },
    img1: {
        type: String,
        required: false
    },
    img2: {
        type: String,
        required: false
    },
    img3: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Blog', blogSchema)