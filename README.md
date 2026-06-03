# Ragunath Suresh Portfolio

Full-stack personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, Express, MongoDB, Mongoose, and Nodemailer.

## Stack

- Frontend: React + Vite + Tailwind CSS + Framer Motion
- Backend: Node.js + Express
- Database: MongoDB Atlas + Mongoose
- Email: Nodemailer SMTP

## Local Setup

1. Install dependencies:
   - `cd client && npm install`
   - `cd ../server && npm install`
2. Create environment files:
   - Copy `client/.env.example` to `client/.env`
   - Copy `server/.env.example` to `server/.env`
3. Add your MongoDB Atlas and SMTP credentials.
4. Seed the database:
   - `cd server`
   - `npm run seed`
5. Start the backend:
   - `npm run dev`
6. Start the frontend in a new terminal:
   - `cd ../client`
   - `npm run dev`

## API Routes

- `GET /api/projects`
- `GET /api/experience`
- `POST /api/contact`

## Deployment

- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas
