const express = require('express')
const router = express.Router()
const {
	getOrdersDB
} = require('../controllers/datakrusn.js')

router
	.get('/', getOrdersDB)

module.exports = router