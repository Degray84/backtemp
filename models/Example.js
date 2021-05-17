const {
	Schema,
	model
} = require('mongoose')

const exampleShema = new Schema({
	name: {
		type: String,
		required: true
	},
	exampleNumber: {
		type: Number,
		required: true
	}
})

module.exports = model('Example', exampleShema)