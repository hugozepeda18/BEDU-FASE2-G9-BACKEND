const TypeUser = require('../../models/Users/TypeUserModel')
const validator = require('validator');

function createTypeUser(req, res) {
    var body = req.body;
    TypeUser.create(body)
        .then(typeUser =>
            res.status(201).send(typeUser)
        )
}

async function getTypeUser(req, res) {
    var idTypeUser = req.params.idTypeUser;
    await TypeUser.findByPk(idTypeUser)
        .then(typeUser => {
            if (!typeUser) {
                res.status(404).send({ message: 'The type user not found.' })
            } else {
                res.status(200).send(typeUser)
            }
        }
        ).catch(err => {
            if (!validator.isUUID(idTypeUser)) {
                res.status(400).json({ message: 'The idTypeUser is invalid.' })
            } else {
                res.status(500).json(err);
            }
        });
}

async function getTypeUsers(req, res) {
    await TypeUser.findAll({
        where: {
            isActive: true
        }
    })
        .then(typeUser => {
            if (typeUser == 0) {
                res.status(204).send();
            } else {
                res.status(200).send(typeUser);
            }
        }
        )
}

async function updateTypeUser(req, res) {
    var body = req.body;
    var idTypeUser = req.params.idTypeUser;
    await TypeUser.update(body, {
        where: {
            idTypeUser: idTypeUser
        }
    })
        .then(typeUser =>
            res.status(200).send(typeUser)
        )
}

function deleteTypeUser(req, res) {
    var idTypeUser = req.params.idTypeUser;
    TypeUser.destroy({
        where: {
            idTypeUser: idTypeUser
        }
    })
        .then(typeUser =>
            res.status(200).send({ "TypeUser eliminated": idTypeUser })
        )
}

// exportamos las funciones definidas
module.exports = {
    createTypeUser,
    getTypeUser,
    getTypeUsers,
    updateTypeUser,
    deleteTypeUser
}