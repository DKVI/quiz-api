const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'must provide id']
    },
    name: {
        type:   String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can be more than 20 characters']
    },
    score: Number
})

module.exports = mongoose.model('User', UserScheme)