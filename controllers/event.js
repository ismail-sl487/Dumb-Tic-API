const models = require('../models')
const event = models.event
const user = models.user
const category =models.category

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
    ]
    }).then(event=>res.send(event)).catch((error) => res.status(400).send(error));
}


exports.store = (req, res) => {
    event.create(req.body).then(event=> {
        res.send({
            message: "success",
            event
        })
    })
}

exports.show = (req, res) => {
    event.findOne({
    
        where: { id: req.params.id },
        include: [
                    {
                        model: user,
                        as:'createdBy'
                    },
                    {
                        model:category,
                        as:'categoryId'
                    }
                 ],
                 

    }).then(event => res.send(event))
    
    .catch(err => res.send(err))
}

