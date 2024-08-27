const express = require('express')
const mongoose = require('mongoose')

const alienRouter = require('./controllers/controller1')


const url = 'mongodb://127.0.0.1:27017/cbit'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
