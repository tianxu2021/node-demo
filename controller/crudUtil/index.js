/**
 * 添加的公共方法
 * @param {*} model 
 * @param {*} params 
 * @param {*} ctx 
 * @returns 
 */

const add = (model,params,ctx) => (
    model.create(params).then(res=>{
        if(res){
            ctx.body = {
                code:200,
                msg:'添加成功',
                data:res
            }
        }else{
            ctx.body = {
                code:300,
                msg:'添加失败'
            }
        }
    }).catch(err=>{
        ctx.body = {
            code:400,
            msg:'添加失败'
        }
        console.error(err)
    })
)

/**
 * 删除的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 * @returns 
 */

const del = (model,where,ctx) => (
    model.findByIdAndDelete(where).then(res=>{
        ctx.body = {
            code:200,
            msg:'删除成功',
            reslut:res
        }
    }).catch(err=>{
        ctx.body = {
            code:400,
            msg:'删除时异常',
        }
        console.error(err)
    })
)

/**
 * 查询的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 * @returns 
 */
 const find = (model,where,ctx) => (
    model.find(where).then(res=>{
        ctx.body = {
            code:200,
            msg:'查询成功',
            data:res
        }
    }).catch(err=>{
        ctx.body = {
            code:400,
            msg:'查询失败'
        }
        console.error(err)
    })
)

/**
 * 查询单条的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 * @returns 
 */
const findOne = (model,where,ctx) => (
    model.findOne(where).then(res=>{
        ctx.body = {
            code:200,
            msg:'查询成功',
            data:res
        }
    }).catch(err=>{
        ctx.body = {
            code:400,
            msg:'查询失败'
        }
        console.error(err)
    })
)

/**
 * 修改的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} params 
 * @param {*} ctx 
 * @returns 
 */

const update = (model,where,params,ctx) => (
    model.updateOne(
        where,
        params
    ).then(res=>{
        ctx.body = {
            code:200,
            msg:'修改成功',
            reslut:res
        }
    }).catch(err=>{
        ctx.body = {
            code:400,
            msg:'修改失败'
        }
        console.error(err)
    })
)

module.exports = {
    add,
    del,
    find,
    findOne,
    update
}