const router = require('koa-router')()
const { model } = require('mongoose')
const userCtl = require('../controller/user')
router.prefix('/users')

//添加用户
router.post('/add', userCtl.userAdd)

//删除用户
router.post('/del',userCtl.userDel)

//查询所有用户
router.get('/find',userCtl.userFind)

//查询所有用户
router.get('/find/:id',userCtl.userFindOne)

//修改用户
router.post('/update',userCtl.userUpdate)



module.exports = router
