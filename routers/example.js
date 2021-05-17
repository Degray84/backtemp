const express = require('express')
const router = express.Router()
const {
	getExamples,
	getExample,
	addExample,
	updateExample,
	deleteExample
} = require('../controllers/example.js')

router
	.get('/', getExamples)
	.get('/:id', getExample)
	.post('/', addExample)
	.put('/:id', updateExample)
	.delete('/:id', deleteExample)

module.exports = router