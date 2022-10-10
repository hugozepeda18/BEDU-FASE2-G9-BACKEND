const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db')
const User = require('./UserModel')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../../config/secret');

const UserCredentials = sequelize.define('UserCredentials', {
  idCredential: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password_hash: {
    type: DataTypes.CHAR(64),
    allowNull: true,
  },
  password_salt: {
    type: DataTypes.CHAR(64),
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  freezeTableName: true,
  timestamps: true
});

UserCredentials.belongsTo(User, {
  foreignKey: "idUser",
  constraints: true,
});

//UserCredentials.sync({alter: true});

UserCredentials.createPassword = function (password) {
  salt = crypto.randomBytes(16).toString("hex"); // generando una "salt" random para cada usuario
  hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la salt
  return { salt: salt, hash: hash }
}

UserCredentials.validatePassword = function (password, user_salt, user_hash) {
  const hash = crypto
    .pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
    .toString("hex");
  return user_hash === hash;
}

UserCredentials.generateJWT = function (user) {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: user._id,
    email: user.email,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
}

UserCredentials.toAuthJSON = function(user){
  return {
      email: user.email,
      token: User.generarJWT(user)
  };
}

module.exports = UserCredentials;