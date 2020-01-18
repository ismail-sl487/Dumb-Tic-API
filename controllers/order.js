const models = require('../models')
const event = models.event
const user = models.user
const payment = models.payment

exports.show = (req, res) => {
    payment.findOne({
    
        where: { payment_creatby_id: req.params.id },
        include: [
                    {
                        model: user,
                        as:'paymentUser'
                    },
                    {
                        model:event,
                        as:'paymentEvent'
                    }
                 ],
                 

    }).then(event => res.send(event))
    
    .catch(err => res.send(err))
}

exports.buy=(req,res)=>{
    payment.create(req.body).then(payment=>{
        res.send({
            message :"success",
            payment
        })
    })
}
exports.update=(req,res)=>{
    payment.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(payment=> {
        res.send({
            message: "success",
            payment
        })
    })
}
exports.tiket=(req,res)=>{
    payment.findAll({
        where:{status:'pending'},
        include:
        [
            {
                model:user,
                as:'paymentUser'
            },
            {
                model:event,
                as:'paymentEvent'
            }
        ]
    }).then(payment=>res.send(payment)).catch(err=>res.send(err))
}

// see database 

exports.showall=(req,res)=>{

        payment.findAll().then(payment=>res.send(payment)).catch(err=>res.send(err))
}