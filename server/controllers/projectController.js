const Project = require('../models/Project')
const mongoose = require('mongoose')
const { projects: seedProjects } = require('../data/seedData')

const getProjects = async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const projects = await Project.find().sort({ createdAt: -1 })
      if (projects.length > 0) {
        return res.status(200).json({ success: true, data: projects })
      }
    }
    // Fallback if DB is disconnected or empty
    res.status(200).json({ success: true, data: seedProjects })
  } catch (error) {
    console.error('Failed to query projects from MongoDB, using fallback data:', error)
    res.status(200).json({ success: true, data: seedProjects })
  }
}

module.exports = {
  getProjects,
}
