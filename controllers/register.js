const models= require('../models')
const register = models.user

exports.register= (req,res)=>{
    register.create(req.body).then(user=>{
        res.send({
            message:"Ok masuk",
            user
        })
    })
}