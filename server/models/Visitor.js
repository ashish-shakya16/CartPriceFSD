const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  ipAddress: String,
  userAgent: String,
  page: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  location: {
    country: String,
    city: String
  },
  sessionDuration: Number
});

module.exports = mongoose.model('Visitor', VisitorSchema);
