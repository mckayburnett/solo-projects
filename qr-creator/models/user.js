const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function(next){
    const user = this
    try {
        if(!user.isModified('password')) return next()
        const hash = await bcrypt.has(user.password, 10)
        user.password = hash
        next()
    } catch (err) {
        throw err
    }
})

userSchema.methods.checkPassword = async function (passwordAttempt) {
    try {
        const isMatch = await bcrypt.compare(passwordAttempt, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)