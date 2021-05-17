const Example = require('../models/Example')

exports.getExamples = async function (req, res, next) {
	try {
		const examples = await Example.find()
		res.send({
			success: true,
			data: examples
		})
	} catch (error) {
		next(error)
	}

}

exports.getExample = async function (req, res, next) {
	try {
		const example = await Example.findById(req.params.id)
		res.send({
			success: true,
			data: example
		})
	} catch (error) {
		next(error)
	}
}

exports.addExample = async function (req, res, next) {
	try {
		const example = await Example.create(req.body)
		res.send({
			success: true,
			data: example
		})
	} catch (error) {
		next(error)
	}
}

exports.updateExample = async function (req, res, next) {
	try {
		const example = await Example.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		})
		res.send({
			success: true,
			data: example
		})
	} catch (error) {
		next(error)
	}
}

exports.deleteExample = async function (req, res, next) {
	try {
		await Example.findByIdAndRemove(req.params.id)
		res.send({
			success: true,
			data: null
		})
	} catch (error) {
		next(error)
	}
}