const forum = require('./schema')
const {
  errorHandler,
  defaultErrorHandler,
  defaultResultHandler,
  aggregateResultHandler,
  makeCallBackHandler,
  loginRequired
} = require('../common/handlers')
const {
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

forum.route('grouped.get', makeSummaryHandler(false))
forum.route('summary.get', { detail: true, handler: makeSummaryHandler(true) })

forum
  .before('get', loginRequired)
  .before('post', loginRequired)
  .after('post', errorHandler)
  .before('put', loginRequired)
  .after('put', errorHandler)
  .before('delete', loginRequired)

module.exports = forum
