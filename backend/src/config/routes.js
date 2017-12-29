const express = require('express')

module.exports = function(server) {
  const router = express.Router()
  server.use('/api', router)

  const forum = require('../api/forum')
  forum.register(router, '/forum')

  const login = require('../api/user')
  login.register(router, '/user')
}
