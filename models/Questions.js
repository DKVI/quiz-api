const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'must provide id'],
        maxlength: 1
    },
    content: {
        type: String,
        required: [true, 'must provide content'],
        trim: true
    }
})

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true
    },
    answer: [answerSchema],
    correct: {
        type: String,
        required: [true, 'must provide correct answer'],
        maxlength: 1
    }
})

module.exports = mongoose.model('question', questionSchema)