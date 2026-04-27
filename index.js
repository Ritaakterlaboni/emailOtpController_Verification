require('dotenv').config()
const path = require("path");
const express = require('express')
const session = require('express-session')
const dbConnection = require('./database/dbConnection')
const  route  = require('./route')
const app = express()
const cors = require('cors')
const port = 3000
app.use(express.json())
app.use(cors());

app.use(session({
  secret: 'ecommerce',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// img upload
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(route)
dbConnection()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
