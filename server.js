const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))

app.get('/Public', (req, res) => {
    res.send('Hello')
})


app.listen(3000, () => console.log('http://localhost:3000'))