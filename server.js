const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))

const List = require('./list.js')

const list = new List()
// routes

app.post('/TODO', (req, res) => {
    list.addItems(req.body)
    res.sendStatus(200)
})




app.listen(3000, () => console.log('http://localhost:3000'))