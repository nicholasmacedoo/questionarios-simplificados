const { Sequelize } = require('sequelize')

const database = new Sequelize({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: 'postgres'
})

module.exports = database