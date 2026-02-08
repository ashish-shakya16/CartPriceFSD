const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);

// MongoDB Connection (Optional for development)
if (process.env.MONGODB_URI || process.env.USE_MONGODB !== 'false') {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => {
      console.log('⚠️  MongoDB connection failed:', err.message);
      console.log('💡 Running without database. Contact form and analytics will be disabled.');
      console.log('💡 To use MongoDB: Start MongoDB service or set USE_MONGODB=false in .env');
    });
} else {
  console.log('ℹ️  Running without MongoDB (USE_MONGODB=false)');
}

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/visitors', require('./routes/visitors'));
app.use('/api/chatbot', require('./routes/chatbot'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
