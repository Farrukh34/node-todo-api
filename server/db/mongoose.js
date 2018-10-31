var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var envDB = process.env.MONGODB_URI;
console.log('MongooseDB', envDB);
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

module.exports = {mongoose};
