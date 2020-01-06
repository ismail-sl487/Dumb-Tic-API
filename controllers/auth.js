const jwt    = require('jsonwebtoken')
const models = require('../models')
const user = models.user

exports.login = (req,res)=>{
    const username    = req.body.username
    const password = req.body.password

    user.findOne({where : {username,password}}).then(users=>{
        if(users){
            const token =jwt.sign({userId :users.id},'my-secret-key')
            
            res.send({
                users,token
            })
        }
        else{
            res.send({
                error:true,
                message:'wrong!!'
            })
        }
    })
}

exports.register=(req,res)=>{
    user.create(req.body).then(datauser =>{
        const token =jwt.sign(
        {
                userid:datauser.id
        },'my-secret-key')
        res.send({
            message:"Create Success",
            datauser,token
        })
    })
}