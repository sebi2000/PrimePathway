const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('hello world')
})

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to db')
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}`)
    })
})
.catch(err => {
    console.log('Connection error: ', err)
})


