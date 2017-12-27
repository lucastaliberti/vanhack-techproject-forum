const forum = require('./schema')
const errorHandler = require('../common/errorHandler')
const {
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,
  makeCallBackHandler,

  summaryMatchId,
  summaryProjectValues,
  summaryUnwind,
  summaryGroupBy
} = require('./handlers')

forum.methods(['get', 'post', 'put', 'delete'])
forum.updateOptions({
  new: true,
  runValidators: true
})
forum.after('post', errorHandler).after('put', errorHandler)

const summaryDefaultValue = () => ({
  _id: '',
  title: '',
  author: '',
  createdAt: '',
  replies: 0
})

const makeSummaryHandler = detail => (req, res, next) => {
  const summaryCallBackHandler = makeCallBackHandler(req, res, next)(
    defaultErrorHandler,
    aggregateResultHandler(summaryDefaultValue)
  )

  const pipeLine = [summaryProjectValues(), summaryUnwind(), summaryGroupBy()]

  const finalPipeLine = detail
    ? [summaryMatchId(req.params.id)].concat(pipeLine)
    : pipeLine

  forum.aggregate(finalPipeLine, summaryCallBackHandler)
}

forum.route('grouped', makeSummaryHandler(false))
forum.route('summary', { detail: true, handler: makeSummaryHandler(true) })

module.exports = forum
