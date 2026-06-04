require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const projectRoutes = require('./routes/projectRoutes')
const experienceRoutes = require('./routes/experienceRoutes')
const contactRoutes = require('./routes/contactRoutes')

const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(',') || '*',
  })
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'Portfolio API is running.' })
})

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API Running"
  })
})

app.use('/api/projects', projectRoutes)
app.use('/api/experience', experienceRoutes)
app.use('/api/contact', contactRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
