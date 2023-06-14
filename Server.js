const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./Models')
const userRoutes = require('./Routes/userRoutes')

const PORT = process.env.PORT || 3000

const app = express()



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})


app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
const cors = require('cors');

app.use(cors({
    origin: '*'
}))