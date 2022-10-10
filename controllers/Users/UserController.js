const User = require('../../models/Users/UserModel')
const UserCredentials = require('../../models/Users/UserCredentialsModel')
const validator = require('validator');
const e = require('express');

async function createUser(req, res) {
  try{
    const body = req.body;
    let userBody = {
      name: body.name,
      lastName: body.lastName,
      brithdayDate: body.brithdayDate,
      address: body.address,
      typeUser: body.typeUser
    };

    const newUser = await User.create(userBody);

    let credentialsBody = {
      email: body.credentials.email,
      password: body.credentials.password,
      idUser: newUser.idUser
    };

    const credential = await UserCredentials.create(credentialsBody);
    const {salt, hash} = UserCredentials.createPassword(credentialsBody.password);

    UserCredentials.password_salt = salt;
    UserCredentials.password_hash = hash;
    credential.save();

    let resUser = {
      user: userBody,
      credentials: credentialsBody
    };
    res.status(201).send(resUser);
  }catch(err){
    if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name) ) {
      return res.status(400).json({
        error: err.errors.map(e => e.message)
      })
    }
    else {
        throw err;
    }
  }  
}

async function getUser(req, res) {
  var idUser = req.params.idUser;
  await User.findByPk(idUser)
    .then(user => {
      if (!user) {
        res.status(404).send({ message: 'The user not found.' })
      } else {
        res.status(200).send(user)
      }
    }
    ).catch(err => {
      if (!validator.isUUID(idUser)) {
        res.status(400).json({ message: 'The idUser is invalid.' })
      } else {
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
      if (user == 0) {
        res.status(204).send();
      } else {
        res.status(200).send(user);
      }
    }
    )
}

async function getUserCredentials(req, res) {
  var idUser = req.params.idUser;
  await UserCredentials.findOne({ where: { idUser: idUser } })
    .then(credentials => {
      if (!credentials) {
        res.status(404).send({ message: 'The credentials not found.' })
      } else {
        res.status(200).send(credentials)
      }
    }
    ).catch(err => {
      if (!validator.isUUID(idUser)) {
        res.status(400).json({ message: 'The idUser is invalid.' })
      } else {
        res.status(500).json(err);
      }
    });
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

async function updateUserCredentials(req, res) {
  var body = req.body;
  var idUser = req.params.idUser;
  await UserCredentials.update(body, {
    where: {
      idUser: idUser
    }
  })
    .then(credentials =>
      res.status(201)
    )
}

function deleteUser(req, res) {
  var idUser = req.params.idUser;
  User.update({ isActive: false }, {
    where: {
      idUser: idUser
    }
  })
    .then(user =>
      res.status(200).send({ "User eliminated": idUser })
    )
  UserCredentials.update({ isActive: false }, {
    where: {
      idUser: idUser
    }
  })
    .then(user =>
      res.status(200).send({ "User credentials eliminated": idUser })
    )
}

// exportamos las funciones definidas
module.exports = {
  createUser,
  getUser,
  getUsers,
  getUserCredentials,
  updateUser,
  deleteUser
}