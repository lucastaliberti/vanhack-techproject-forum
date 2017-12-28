const mongoose = require('mongoose')

const summaryMatchId = id => ({
  $match: { _id: mongoose.Types.ObjectId(id) }
})

const summaryProjectValues = () => ({
  $project: {
    _id: 1,
    title: 1,
    description: 1,
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
    description: { $max: '$description' },
    author: { $max: '$author' },
    createdAt: { $max: '$createdAt' },
    replies: { $sum: 1 }
  }
})

module.exports = {
  summaryMatchId,
  summaryProjectValues,
  summaryUnwind,
  summaryGroupBy
}
