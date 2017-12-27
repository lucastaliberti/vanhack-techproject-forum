const restful = require('node-restful')
const mongoose = restful.mongoose

const reply = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const discussion = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: [reply]
})

module.exports = restful.model('Forum', discussion)
