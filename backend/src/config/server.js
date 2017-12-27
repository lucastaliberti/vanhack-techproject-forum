const PORT = 3003

const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')

const allowCors = require('./cors')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(PORT, function() {
  process.stdout.write('\033c')
  console.log(`BACKEND is running on port ${PORT}`)
})

module.exports = server
