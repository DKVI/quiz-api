const mongoose = require('mongoose')

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        user: 'hahuynhvan',
        pass: 'VanvaThi123456',
        autoIndex: true,
        dbName: 'QuizGameProject'
    })
}

module.exports = connectDB