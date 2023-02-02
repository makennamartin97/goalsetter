//creating backend api, entry point
const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
//allows us to create a dotevnv file with our environment variables 
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
//port to run server on
const port = process.env.PORT || 8000
connectDB()
//initialize express
const app = express()


app.use('/api/goals',require('./routes/goalRoutes'))







app.listen(port, () => console.log(`Server started on ${port}`))
