const models = require('../models')
const categories = models.category
const events = models.event
const user = models.user
exports.index = (req, res) => {
    categories.findAll().then(category=>
        res.send(category)).catch((error) => res.status(400).send(error));
}

exports.events = (req, res) => {
    events.findAll({
    
        where: { category_id: req.params.id },
        include :[
            {
                model: user,
                as:'createdBy'
            },
            {
                model: categories,
                as:'categoryId'
            },
        ]
        
    }).then(events => res.send(events))
    
    .catch(err => res.send(err))
}


exports.del= (req,res) => {
    categories.destroy({ 

        where: {id:req.params.id}}).then(category=>{
        res.send({
            message:"Sucess",
            category
        })
    })
}


exports.store = (req, res) => {
    categories.create(req.body).then(category=> {
        res.send({
            message: "success",
            category
        })
    })
}
