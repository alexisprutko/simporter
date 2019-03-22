
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const authRouter = require('./routes/auth')
const _ = require('lodash')

// env
require('dotenv').config()

const app = express()


app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api/v1/auth",authRouter )

app.use((err, req, res, next) => { 
    console.log("hello")
  
    res.status(400).json({});
  });
// test
app.get('/',passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send("ok")
})

app.listen(process.env.PORT, error => {
    if (error) throw error
    console.log(`Server 🚀 🚀 🚀 running on port ${process.env.PORT} `)
})

