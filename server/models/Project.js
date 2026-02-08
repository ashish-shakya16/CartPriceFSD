const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: String,
  technologies: [String],
  category: {
    type: String,
    enum: ['ML', 'Deep Learning', 'NLP', 'Computer Vision', 'Web Development', 'Data Science', 'Other'],
    required: true
  },
  imageUrl: String,
  githubUrl: String,
  liveUrl: String,
  demoUrl: String,
  featured: {
    type: Boolean,
    default: false
  },
  metrics: {
    accuracy: Number,
    performance: String,
    datasetSize: Number
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
