const mongoose = require('mongoose');
const config =  require('config');
const db = "mongodb+srv://golu:golu123@cluster0.df9nq.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
