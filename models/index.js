// 1.引入mongoose
const mongoose = require('mongoose')

// 2.new一个Schema对象
var userSchema =  new mongoose.Schema({
    username:String,
    pwd:String
})

//  3.创建模型对象

// 用户模型对象
const User = mongoose.model('users',userSchema)

module.exports = {
    User
}