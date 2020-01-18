const models = require('../models')
const profile = models.user
const event = models.event

exports.index = (req, res) => {
    profile.findAll({
        include: [{

            model: event,
            as:"createBy"
        }]
    }).then(profile=>res.send(profile)).catch((error) => res.status(400).send(error));
}

exports.show = (req, res) => {
    profile.findOne({id: req.params.id}).then(profile=> res.send(profile))
}

