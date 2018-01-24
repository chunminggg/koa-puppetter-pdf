var mongoose = require('mongoose')
var UserModel = require('../model/user.model')
var UserDb = require('../db/user.db')

exports.save = async (ctx, next) => {
    let req = ctx.request.body
    
}