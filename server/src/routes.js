const authController = require('./controllers/AuthController')

const authControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    authControllerPolicy.register,
    authController.register)
}
