
require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
const movieRoutes = require('./routes/movieRoutes')
const genreRoutes = require('./routes/genreRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const mongoose = require('mongoose');

const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5173',
  'https://movie-frontend-kohl-nine.vercel.app'
];

app.use(cors({
  credentials: true,
  origin: allowedOrigins
  // origin: process.env.ENVIRONMENT === "development" ? 'http://localhost:5174' : 'https://movie-frontend-kohl-nine.vercel.app'
}));
app.use(express.json());
app.use(cookieParser())

app.use('/movies', movieRoutes);
app.use('/genres', genreRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}`))


main().then(() => console.log('connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}