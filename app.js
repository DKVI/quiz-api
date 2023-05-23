const express = require('express')
const app = express()
const users = require('./routes/users')
const questions = require('./routes/questions')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found-handler')
const errorHandler = require('./middleware/error-handler')

// middleware
app.use(express.json())
//routes
app.use('/api/v1/users', users)
app.use('/api/v1/questions', questions)
app.use(notFound)
app.use(errorHandler)

// start
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, console.log('Listen on port 3000'))
    } catch (error) {
        console.log(error)
    }
}

start()