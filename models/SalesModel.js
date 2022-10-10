const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')
const Product = require('./ProductModel');
const User = require('./Users/UserModel');

const Sale = sequelize.define('Sale', {
    idUser: {
        type: DataTypes.UUID,
        allowNull: false
    },
    idProduct: {
        type: DataTypes.UUID,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            isNumeric: true
        }
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

//relation 1 to many
Product.hasOne(Sale, {foreignKey: "idProduct"});
User.hasOne(Sale, {foreignKey: "idUser"});

// Sale.sync();

module.exports = Sale;