const _ = require('lodash')
const jwt = require('jsonwebtoken')

const defaultErrorHandler = (res, error) => {
  res.status(500).json({
    errors: [error]
  })
}

const defaultResultHandler = (res, value) => {
  res.json({ value })
}

const makeCallBackHandler = (req, res, next) => (
  errorHandler,
  resultHandler
) => (error, value) => {
  if (error) errorHandler(res, error)
  else resultHandler(res, value)
}

const aggregateResultHandler = defaultValue => (res, value) => {
  res.json(value || defaultValue)
}

const parseErrors = nodeRestfulErrors =>
  _.map(nodeRestfulErrors, error => error.message)

const errorHandler = (req, res, next) => {
  const bundle = res.locals.bundle
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors)
    res.status(500).json({ errors })
  } else next()
}

const loginRequired = (req, res, next) => {
  if (req.user) next()
  else return res.status(401).json({ message: 'Unauthorized user!' })
}

const checkAuthorizationHeader = (req, res, next) => {
  req.user = undefined

  const splitAuthorizationHeader = AuthorizationHeader => {
    const splitedHeader = AuthorizationHeader.split(' ')
    return {
      type: splitedHeader[0],
      payload: splitedHeader[1]
    }
  }

  const hasJwtAuthorizationHeader = headers => headers && headers.authorization

  const buildPayloadToCheck = headers =>
    hasJwtAuthorizationHeader(headers)
      ? splitAuthorizationHeader(headers.authorization)
      : { type: '', payload: '' }

  const payloadToCheck = buildPayloadToCheck(req.headers)

  if (payloadToCheck.type === 'JWT') {
    jwt.verify(
      payloadToCheck.payload,
      process.env.JWT_SECRET,
      (err, decode) => {
        req.user = decode
      }
    )
  }

  next()
}

module.exports = {
  errorHandler,
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,

  makeCallBackHandler,

  checkAuthorizationHeader,
  loginRequired
}
