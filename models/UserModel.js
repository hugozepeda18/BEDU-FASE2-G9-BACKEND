const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const secret = require('../config').secret; 

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate:{
        isLowercase: true,
        is: /^[a-zA-Z0-9]+$/
    }
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  brithdayDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isEmail: true,
  }
  },
  address: {
    type: DataTypes.TEXT
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    validate:{
      isIn: [[true, false]]
  }
  }
}, {
  freezeTableName: true,
  timestamps: false
});

// User.sync();

module.exports = User;