const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const login = require('./login')

app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/login', login)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))