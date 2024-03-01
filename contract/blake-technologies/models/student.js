const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const studentSchema = new Schema({
    data: {
        type: Object,
        required: true,
    },
    notes: {
        type: String,
        required: false
    },
    uncontacted: {
        type: Boolean,
        default: true,
        required: true
    },
    contacted: {
        type: Boolean,
        default: false,
        required: true
    },
    accepted: {
        type: Boolean,
        default: false,
        required: true
    },
    processing: {
        type: Boolean,
        default: false,
        required: true
    },
    enrolled: {
        type: Boolean,
        default: false,
        required: true
    },
    declined: {
        type: Boolean,
        default: false,
        required: true
    }
})

modeule.exports = mongoose.model('Student', studentSchema)