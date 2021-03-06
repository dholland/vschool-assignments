const express = require('express')
var path = require('path')
var fs = require('fs')

const app = express()
var morgan = require('morgan')


const data = [{ name: "millie" }, { name: "samoa" }]

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan("common", { stream: accessLogStream }))

app.get("/", (req, res) => res.send(data))

app.listen(9000, () => {
  "Listening on Port 9000"
})