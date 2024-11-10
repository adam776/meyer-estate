import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI;  // Make sure to define this in your .env file

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000!!!');
});
