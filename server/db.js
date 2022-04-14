// database connection

const { Sequelize } = require("sequelize");

// we export an object
module.exports = new Sequelize(
    // name, user, password, host, port;
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
);
