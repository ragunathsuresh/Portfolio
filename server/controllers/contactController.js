const Message = require('../models/Message')
const mongoose = require('mongoose')
const createTransporter = require('../config/mailer')

const sendContactMessage = async (req, res, next) => {
  const { name, email, message } = req.body

  try {
    let savedMessage = null
    if (mongoose.connection.readyState === 1) {
      savedMessage = await Message.create({ name, email, message })
    } else {
      console.warn('MongoDB is not connected. Skipping message database storage.')
      savedMessage = { name, email, message, createdAt: new Date() }
    }

    const transporter = createTransporter()

    // Send notification email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.PORTFOLIO_CONTACT_EMAIL || 'ragusuresh291@gmail.com',
      subject: `Portfolio Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    })

    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thanks for contacting Ragunath Suresh',
      text: 'Thank you for reaching out! I have received your message and will get back to you shortly.',
    })

    res.status(201).json({
      success: true,
      message: 'Message sent successfully.',
      data: savedMessage,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  sendContactMessage,
}
