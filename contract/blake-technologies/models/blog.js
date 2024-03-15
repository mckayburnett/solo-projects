const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    stylePage: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    styleTitle: {
        type: String,
        required: false
    },
    subtitle: {
        type: String,
        required: false
    },
    styleSubtitle: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    styleContent: {
        type: String,
        required: false
    },
    img1: {
        type: String,
        required: false
    },
    styleImg1: {
        type: String,
        required: false
    },
    img2: {
        type: String,
        required: false
    },
    styleImg2: {
        type: String,
        required: false
    },
    img3: {
        type: String,
        required: false
    },
    styleImg3: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Blog', blogSchema)