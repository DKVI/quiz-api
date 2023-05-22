const express = require('express')
const { getAllQuestions } = require('../controllers/questions')
const router = express.Router()
const {
    getAllQuestions,
    createNewQuestions,
    getSingleQuestion,
    updateQuestion,
    deleteQuestion,
} = require('../controllers/questions')
// route
router.route('/').get(getAllQuestions).post(createNewQuestions)
router.route('/:id').get(getSingleQuestion).patch(updateQuestion).delete(deleteQuestion)

module.exports = router