const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.json(user.toJSON())
      return
    } catch (error) {
      res.status(400).json({
        error: 'the email is already taken'
      })
    }
  }
}
