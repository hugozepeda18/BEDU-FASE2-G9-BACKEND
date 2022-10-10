const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db')
const User = require('./UserModel')
const crypto = require('crypto');                             
const jwt = require('jsonwebtoken');                          
const secret = require('../config').secret;                   

const UserCredentials = sequelize.define('UserCredentials', {
  idCredential: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
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

//  UserCredentials.sync();

module.exports = UserCredentials;