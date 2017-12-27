const _ = require('lodash')

const parseErrors = nodeRestfulErrors =>
  _.map(nodeRestfulErrors, error => error.message)

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle

  if (bundle.errors) {
    const errors = parseErrors(bundle.errors)
    res.status(500).json({ errors })
  } else next()
}
