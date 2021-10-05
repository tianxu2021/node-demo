const models = require('../models')
const crud = require('./crudUtil')
// 添加用户
const userAdd = async (ctx) => {
    let {username,pwd} = ctx.request.body
    await crud.add(models.User,{username,pwd},ctx)
}

// 删除用户
const userDel = async (ctx) => {
    let {_id} = ctx.request.body
    await crud.del(models.User,{_id},ctx)
}
// 查询用户
const userFind = async (ctx) => {
    await crud.find(models.User,null,ctx)
}

const userFindOne = async (ctx) => {
    await crud.findOne(models.User,{_id:ctx.params.id},ctx)
}
// 修改用户
const userUpdate = async (ctx) => {
    let params = ctx.request.body
    await crud.update(models.User,{_id:params._id},{
        username:params.username,
        pwd:params.pwd
    },ctx)
}

module.exports = {
    userAdd,userDel,userFind,userFindOne,userUpdate
}