const mongoose = require('mongoose')

const defaultErrorHandler = (res, error) => {
  res.status(500).json({
    errors: [error]
  })
}

const defaultResultHandler = (res, value) => {
  res.json({ value })
}

const aggregateResultHandler = defaultValue => (res, value) => {
  res.json(value || defaultValue)
}

const makeCallBackHandler = (req, res, next) => (
  errorHandler,
  resultHandler
) => (error, value) => {
  if (error) errorHandler(res, error)
  else resultHandler(res, value)
}

const summaryMatchId = id => ({
  $match: { _id: mongoose.Types.ObjectId(id) }
})

const summaryProjectValues = () => ({
  $project: {
    _id: 1,
    title: 1,
    author: 1,
    createdAt: 1,
    replies: 1
  }
})

const summaryUnwind = () => ({ $unwind: '$replies' })

const summaryGroupBy = () => ({
  $group: {
    _id: '$_id',
    title: { $max: '$title' },
    author: { $max: '$author' },
    createdAt: { $max: '$createdAt' },
    replies: { $sum: 1 }
  }
})

module.exports = {
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,
  makeCallBackHandler,

  summaryMatchId,
  summaryProjectValues,
  summaryUnwind,
  summaryGroupBy
}
