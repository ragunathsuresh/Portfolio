const express = require('express')
const rateLimit = require('express-rate-limit')
const { sendContactMessage } = require('../controllers/contactController')
const { validateContact } = require('../middleware/validationMiddleware')

const router = express.Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many messages from this IP, please try again after 15 minutes',
  },
})

router.post('/', contactLimiter, validateContact, sendContactMessage)

module.exports = router
