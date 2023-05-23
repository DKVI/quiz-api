const Question = require('../models/Questions')
const asyncWrapper = require('../middleware/async')
const createCustomError = require("../errors/custom-error")

const getAllQuestions = asyncWrapper(async(req, res, next) => {
    const {name, answer, field} = req.query
    const queryObject = {}
    if(name) {
        queryObject.name = {$regex: name, $option: 'i'}
    }
    if(answer) {
        const [content, value] = answer.split('=')
        queryObject.answer = {
            [content]: {$regex: value, $option: 'i'}
        }
    }
    let result = Question.find(queryObject)
    if(field) {
        const fieldList = field.split(',').join(' ')
        result = result.select(fieldList)
    }
    const question = await result
    res.status(201).json({question})
})

const createNewQuestions = asyncWrapper(async(req, res, next) => {
    const question = await Question.create(req.body)
    res.status(201).json({question})
})

const getSingleQuestion = asyncWrapper(async(req, res, next) => {
    const {id: questionID} = req.params
    const user = await User.findOne({_id: taskID})
    if(!user)
        return next(createCustomError(`Cant find question with id: ${questionID}`, 404))
    res.status(201).json({user})
})

const updateQuestion = asyncWrapper(async(req, res, next) => {
    const {id: questionID} = req.params
    const question = await Question.findOneAndUpdate({_id: questionID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!question)
        return next(createCustomError(`Cant find Question with id: ${questionID}`, 404))
    res.status(201).json({question})
})

const deleteQuestion = asyncWrapper(async(req, res, next) => {
    const {id: questionID} = req.params
    const question = await Question.findOneAndRemove({_id: questionID})
    if(!question)
        return next(createCustomError(`Cant find Question with id: ${questionID}`, 404))
    res.status(201).json({question})
})

module.exports = {
    getAllQuestions,
    createNewQuestions,
    getSingleQuestion,
    updateQuestion,
    deleteQuestion,
}