require('dotenv').config()
const connectDB = require('../config/db')
const Project = require('../models/Project')
const Experience = require('../models/Experience')
const { projects, experience } = require('../data/seedData')

const seedDatabase = async () => {
  try {
    await connectDB()
    await Project.deleteMany()
    await Experience.deleteMany()
    await Project.insertMany(projects)
    await Experience.insertMany(experience)
    console.log('Database seeded successfully.')
    process.exit(0)
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`)
    process.exit(1)
  }
}

seedDatabase()
