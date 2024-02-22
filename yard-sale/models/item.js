const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    picture: {
        data: Buffer,  // Using Buffer to store binary data
        type: String,
        required: false
    },
    category: {
        type: String, 
        enum: ['clothing', 'kitchen', 'auto', 'yard', 'furniture', 'baby', 'outdoors', 'sports', 'home', 'electronics'],
        required: true,
    },
    canBeHeld: {
        type: Boolean,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)