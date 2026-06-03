const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['Internship', 'Education', 'Certification', 'Experience'],
      default: 'Experience',
    },
    icon: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Experience', experienceSchema)
