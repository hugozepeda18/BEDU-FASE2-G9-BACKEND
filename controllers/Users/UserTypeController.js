const UserTypes = require('../../models/Users/UserTypesModel')
const validator = require('validator');

function createTypeUser(req, res) {
    var body = req.body;
    UserTypes.create(body)
        .then(userTypes =>
            res.status(201).send(userTypes)
        )
}

async function getTypeUser(req, res) {
    var idTypeUser = req.params.idTypeUser;
    await UserTypes.findByPk(idTypeUser)
        .then(userTypes => {
            if (!userTypes) {
                res.status(404).send({ message: 'The type user not found.' })
            } else {
                res.status(200).send(userTypes)
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
    await UserTypes.findAll({
        where: {
            isActive: true
        }
    })
        .then(userTypes => {
            if (userTypes == 0) {
                res.status(204).send();
            } else {
                res.status(200).send(userTypes);
            }
        }
        )
}

async function updateTypeUser(req, res) {
    const body = req.body;
    const idTypeUser = req.params.idTypeUser;
    await UserTypes.update(body, {
        where: {
            idTypeUser: idTypeUser
        }
    })
        .then(userTypes =>
            res.status(200).send(userTypes)
        )
}

function deleteTypeUser(req, res) {
    var idTypeUser = req.params.idTypeUser;
    UserTypes.update({ isActive: false },{
        where: {
            idTypeUser: idTypeUser
        }
    })
        .then(userTypes =>
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