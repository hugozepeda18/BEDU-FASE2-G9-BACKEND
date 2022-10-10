const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Category = sequelize.define('Category', {
    idCategory: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Category.sync();

module.exports = Category;