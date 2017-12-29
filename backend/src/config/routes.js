const express = require('express')
const { checkAuthorizationHeader } = require('../api/common/handlers')

module.exports = function(server) {
  const router = express.Router()

  server.use(checkAuthorizationHeader)
  server.use('/api', router)

  const forum = require('../api/forum')
  forum.register(router, '/forum')

  const login = require('../api/user')
  login.register(router, '/user')
}
