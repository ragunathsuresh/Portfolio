const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI

    if (!mongoUri) {
      console.warn('WARNING: MONGODB_URI is missing in server/.env. Falling back to local data.')
      return
    }

    if (
      mongoUri.startsWith('mongodb+srv://') &&
      mongoUri.includes('@') &&
      mongoUri.split('://')[1]?.split('@').length > 2
    ) {
      console.warn('WARNING: MongoDB URI appears malformed. Falling back to local data.')
      return
    }

    const connection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of hanging
    })
    console.log(`MongoDB connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)
    console.warn('Server will continue running in fallback mode with local data.')
  }
}

module.exports = connectDB
