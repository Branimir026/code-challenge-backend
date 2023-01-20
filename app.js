const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const login = require('./login')

const encode = require('./encode')

const auth = require('./middleware/authorization')

app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/login', login)
app.post('/encode', auth, encode)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))