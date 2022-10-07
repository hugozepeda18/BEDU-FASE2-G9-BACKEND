const { Sequelize } = require('sequelize');

sequelize = new Sequelize({
    database: "d64r3l6jujgrdn",
    username: "ydzrnvonexlnjs",
    password: "de648aeb1b4ca3a8fb516289af9ac29a413adfd26a01b172d22df33dcd578473",
    host: "ec2-34-235-198-25.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

module.exports = sequelize