const express = require('express')
const path = require('path')
const morgan = require('morgan')
const connectDB = require('./config/db.js')

// configs
require('colors')
require('dotenv').config()

//connection to database
connectDB()

// Routers

const example = require('./routers/example.js')

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.static('dist'));
app.use(express.json())
app.use(express.urlencoded({
	extended: false
}))

app.use(morgan('dev'))

// use Routers

app.use('/api/example', example)

app.use(function(err, req, res, next) {
  res.status(500).send({
		success: false,
		error: err.message,
		data: null
	});
});

app.listen(PORT, () => {
	console.log('Сервер запущен в окружении '.cyan +
		process.env.NODE_ENV.magenta + ' на порту '.cyan + PORT.magenta + ' ...'.cyan)
})