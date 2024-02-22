const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    endingDate: {
        type: Date,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: false
    }
})

module.exports = mongoose.model('Location', locationSchema)