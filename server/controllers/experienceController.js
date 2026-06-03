const Experience = require('../models/Experience')
const mongoose = require('mongoose')
const { experience: seedExperience } = require('../data/seedData')

const getExperience = async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const experience = await Experience.find().sort({ createdAt: 1 })
      if (experience.length > 0) {
        return res.status(200).json({ success: true, data: experience })
      }
    }
    // Fallback if DB is disconnected or empty
    res.status(200).json({ success: true, data: seedExperience })
  } catch (error) {
    console.error('Failed to query experience from MongoDB, using fallback data:', error)
    res.status(200).json({ success: true, data: seedExperience })
  }
}

module.exports = {
  getExperience,
}
