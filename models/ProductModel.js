const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')
const Category = require('./CategoryModel');

const Product = sequelize.define('Product', {
    idProduct: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate:{
            notEmpty: true,
            isNumeric: true
        }
    },
    idCategory: {
        type: DataTypes.UUID,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
});

//relation 1 to many
Category.hasOne(Product, {foreignKey: "idCategory"});

// Product.sync({alter: true});

module.exports = Product;