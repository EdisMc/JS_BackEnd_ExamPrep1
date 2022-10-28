const mongoose = require('mongoose');

//TODO change db according to assignment
const COONECTION_STRING = 'mongodb://0.0.0.0:27017/sk1'
module.exports = async (app) => {
    try {
        await mongoose.connect(COONECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected!');
    } 
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};