const validateContact = (req, res, next) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    res.status(400)
    throw new Error('Please provide all required fields (name, email, message).')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    res.status(400)
    throw new Error('Please provide a valid email address.')
  }

  next()
}

module.exports = { validateContact }
