const mongoose = require('mongoose')


module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/tianxu',{useUnifiedTopology: true,useNewUrlParser:true})
    .then(()=>{
        console.log('数据库连接成功')
    }).catch(err=>{
        console.log('数据库连接失败',err)
    })
}