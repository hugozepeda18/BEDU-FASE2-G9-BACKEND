const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')
const Category = require('./CategoryModel');

const Product = sequelize.define('Product', {
    idProduct: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    idCategory: {
        type: DataTypes.UUID,
        allowNull: false
    }
});

//relation 1 to many
Category.hasOne(Product, {foreignKey: "idCategory"});

// Product.sync({alter: true});

module.exports = Product;