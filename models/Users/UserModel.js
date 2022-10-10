const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db')
const UserTypes = require('./UserTypesModel')

const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const secret = require('../config').secret; 

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate:{
        notEmpty: true,
        isAlpha: true,
    }
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
  }
  },
  brithdayDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true,
  }
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
  }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    validate:{
      isIn: [[true, false]],
      notEmpty: true,
  }
  }
}, {
  freezeTableName: true,
  timestamps: true
});

User.belongsTo(UserTypes, {
  foreignKey: "typeUser",
  constraints: true,
});

//sequelize.sync({force: true});

module.exports = User;