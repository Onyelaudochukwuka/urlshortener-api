const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://udoka:furthermaths$1@cluster0.bmcxh.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
        }
        );
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;