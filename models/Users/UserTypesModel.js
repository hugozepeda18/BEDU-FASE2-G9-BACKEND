const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/db')

const UserTypes = sequelize.define('TypeUser', {
  idTypeUser: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: DataTypes.TEXT
  },
  description: {
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

module.exports = UserTypes;