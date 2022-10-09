const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db')
const TypeUser = require('./TypeUserModel')

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT
  },
  lastName: {
    type: DataTypes.TEXT
  },
  brithdayDate: {
    type: DataTypes.DATE
  },
  address: {
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

User.belongsTo(TypeUser, {
  foreignKey: "typeUser",
  constraints: true,
});

//sequelize.sync({force: true});

module.exports = User;