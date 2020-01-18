const models = require('../models')
const moment = require('moment')
const { Op } = require('sequelize')

const event = models.event
const user = models.user
const category =models.category
const payment =models.payment
// Date filter Now
const today = moment().startOf('day');
const tommorow = moment().add(1, 'days');
const lastdayTommorw = moment(tommorow).endOf('day');
var lastday = moment(today).endOf('day');

exports.index = (req, res) => {
    event.findAll({
       
    include: 
    [
        {
            model: category,
            as: "categoryId"
        },
        {
            model: user,
            as :"createdBy"
        }
    ],
    where: {
        start_time: { 
            [Op.gt]:  today.toDate(),
            [Op.lt]:  lastday.toDate()
          },
      },
    }).then(event=>res.send(event)).catch((error) => res.status(400).send(error));
}


exports.tomorrow=(req,res)=>{
    event.findAll({
        include:
        [
           
            {
                model: user,
                as :"createdBy"
            }
        ],
        where:
        {
            start_time:
            {
                [Op.gt]:tommorow.toDate(),
                [Op.lt]:lastdayTommorw.toDate()
            }
        }
    }).then(event=>res.send(event)).catch((error) => res.status(400).send(error));
}


exports.store = (req, res) => {
    event.create(req.body).then(event=> {
        res.send({
            message: "success",
            event
        }).catch(err => res.send(err))
    })
}

exports.show = (req, res) => {
    event.findOne({
    
        where: { id: req.params.id },
        include: [
                    {
                        model   : user,
                        as      :'createdBy'
                    },
                    {
                        model   :category,
                        as      :'categoryId'
                    }
                 ],
                 

    }).then(event => res.send(event))
    
    .catch(err => res.send(err))
}



exports.search=(req,res)=>{
    event.findAll({
        include:
        [
            {
                model:user,
                as:'createdBy'
            }
        ],
        where:
        {
            title:
            {
                [Op.like]:`%${req.params.title}%`
            }
        }
    })
    .then(event=>
        {
            res.send(event)
        }
    )
    .catch(err=>res.send(err))
}


exports.edit=(req,res)=>{

    event.update(
        req.body,
        {

            where : 
            {
                id: req.params.id
            }
        }).then(event=>
            {
                res.send({
                    message:'success edit',
                    event
                })
            })
        .catch(err=>res.send(err))
}

exports.all=(req,res)=>{

    event.findAll().then(event=>

        res.send(event)
    )

}


