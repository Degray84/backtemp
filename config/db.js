const mongoose = require('mongoose')
require('colors')

const connectDB = async () =>{
	const connection = await mongoose.connect(process.env.MONGO_URI,{
		useNewUrlParser:true,
		useCreateIndex: true,
		useFindAndModify:false,
		useUnifiedTopology:true
	})

	console.log(`MongoDB подключился к: ${connection.connection.host.magenta}`.blue)
}
module.exports = connectDB