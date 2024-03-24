const mongoose = require("mongoose")
const Schema = mongoose.Schema

const businessSchema = new Schema({
    data: {
        type: Object,
        required: true,
    },
    note: {
        type: String,
        required: false
    },
    uncontacted: {
        type: Boolean,
        default: false,
        required: true
    },
    processing: {
        type: Boolean,
        default: false,
        required: true
    },
    underContract: {
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

module.exports = mongoose.model('Business', businessSchema)