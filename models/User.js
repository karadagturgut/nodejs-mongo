const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
Name: String,
Age: Number
})

module.exports = mongoose.model('user',User)