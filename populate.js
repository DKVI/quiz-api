
const User = require('./models/Users')
const Question = require('./models/Questions')
const connectDB = require('./db/connect')
const questionsJson = require('./questions.json')

require('dotenv').config()
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI) 
        
        // user
        // await User.deleteMany()
        // await User.create()
        // question
        await Question.deleteMany()
        await Question.create(questionsJson)

        console.log('Connect Success!');
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()