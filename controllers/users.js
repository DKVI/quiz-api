const User = require('../models/Users')
const asyncWrapper = require('../middleware/async')
const createCustomError = require("../errors/custom-error")

const getAllUsers = asyncWrapper(async(req, res, next) => {
    const users = await User.find()
    res.status(201).json({users})
})

const createNewUsers = asyncWrapper(async(req, res, next) => {
    const user = await User.create(req.body)
    res.status(201).json({user})
})

const getSingleUser = asyncWrapper(async(req, res, next) => {
    const {id: taskID} = req.params
    const user = await User.findOne({_id: taskID})
    if(!user)
        return next(createCustomError(`Cant find user with id: ${taskID}`, 404))
    res.status(201).json({user})
})

const updateUser = asyncWrapper(async(req, res, next) => {
    const {id: taskID} = req.params
    const user = await User.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!user)
        return next(createCustomError(`Cant find user with id: ${taskID}`, 404))
    res.status(201).json({user})
})

const deleteUser = asyncWrapper(async(req, res, next) => {
    const {id: taskID} = req.params
    const user = await User.findOneAndRemove({_id: taskID})
    if(!user)
        return next(createCustomError(`Cant find user with id: ${taskID}`, 404))
    res.status(201).json({user})
})

module.exports = {
    getSingleUser,
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}