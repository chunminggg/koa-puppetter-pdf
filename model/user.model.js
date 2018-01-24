var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema ({
    userId: String,
    Token: String,
    Uid: String,
    Identity: String,
    Organ: String,
    TimeSamp: String,
    Signature: String
})
module.exports = mongoose.model('User', userSchema)