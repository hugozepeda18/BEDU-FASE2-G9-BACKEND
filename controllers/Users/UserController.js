const User = require('../../models/Users/UserModel')
const validator = require('validator');

function createUser(req, res) {
  var body = req.body;
  User.create(body)
    .then(user =>
      res.status(201).send(user)
    )
}

async function getUser(req, res) {
  var idUser = req.params.idUser;
  await User.findByPk(idUser)
    .then(user => {
      if (!user) {
        res.status(404).send({ message: 'The user not found.' })
      }else{
        res.status(200).send(user)
      }
    }
    ).catch(err => {
      if (!validator.isUUID(idUser)) {
        res.status(400).json({ message: 'The idUser is invalid.' })
      }else {
        res.status(500).json(err);
      }
    });
}

async function getUsers(req, res) {
  await User.findAll({
    where: {
      isActive: true
    }
  })
    .then(user => {
      if(user == 0){
        res.status(204).send();
      }else {
        res.status(200).send(user);
      }
    }
    )
}

async function updateUser(req, res) {
  var body = req.body;
  var idUser = req.params.idUser;
  await User.update(body, {
    where: {
      idUser: idUser
    }
  })
    .then(user =>
      res.status(200).send(user)
    )
}

function deleteUser(req, res) {
  var idUser = req.params.idUser;
  User.destroy({
    where: {
      idUser: idUser
    }
  })
    .then(user =>
      res.status(200).send({"User eliminated": idUser})
    )
}

// exportamos las funciones definidas
module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
}