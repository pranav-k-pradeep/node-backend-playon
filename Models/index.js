
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize(`postgres://postgres:pranavkp@localhost:5432/user_signup`, {dialect: "postgres"})


    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)


module.exports = db