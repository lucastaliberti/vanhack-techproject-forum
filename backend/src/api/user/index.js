const user = require('./schema')
const {
  errorHandler,
  defaultErrorHandler,
  defaultResultHandler,
  makeCallBackHandler
} = require('../common/handlers')
const {
  hashPasswordMiddleware,
  comparePassword,
  signIn,
  checkValidUser
} = require('./handlers')

user.methods(['get', 'post', 'put', 'delete'])
user.updateOptions({
  new: true,
  runValidators: true
})
user
  .before('post', [hashPasswordMiddleware])
  .before('put', [hashPasswordMiddleware])
  .after('post', errorHandler)
  .after('put', errorHandler)

user.route('signin.get', signIn(user))

module.exports = user
