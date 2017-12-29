const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const hashPasswordMiddleware = async (req, res, next) => {
  const salt = await bcrypt.genSalt()
  req.body.password = await bcrypt.hash(req.body.password, salt)
  next()
}

const comparePassword = (password, hashPassword) =>
  bcrypt.compareSync(password, hashPassword)

const signIn = user => (req, res) => {
  const query = {
    email: req.body.email
  }
  const foundUser = user.findOne(query)

  foundUser.then(checkValidUser(req, res)).catch(err => {
    throw err
  })
}

const checkValidUser = (req, res) => user => {
  const passwordToCheck = req.body.password || ''

  if (!user || !comparePassword(passwordToCheck, user.password))
    res.status(401).json({ errors: ['Authentication failed.'] })
  else
    res.json({
      token: jwt.sign(
        { email: user.email, name: user.name, _id: user._id },
        process.env.JWT_SECRET
      )
    })
}

module.exports = {
  hashPasswordMiddleware,
  comparePassword,
  signIn,
  checkValidUser
}
