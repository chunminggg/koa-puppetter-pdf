var UserModel = require('../model/user.model')

exports.findByUserId = async({userId}) =>{
   
    return  UserModel.find({userId})
}