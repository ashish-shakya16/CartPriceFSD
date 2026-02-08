const express = require('express');
const router = express.Router();
const axios = require('axios');

// Chat with AI assistant
router.post('/chat', async (req, res) => {
  const { message } = req.body;
  
  try {
    // Call Python ML service
    const response = await axios.post('http://localhost:8000/chat', {
      message: message
    });
    
    res.json({
      success: true,
      response: response.data.response,
      confidence: response.data.confidence
    });
  } catch (error) {
    // Only log actual connection errors, not general API failures
    if (error.code === 'ECONNREFUSED') {
      console.warn('⚠️ Python ML service unavailable, using fallback responses');
    } else if (error.response?.status) {
      console.warn(`⚠️ Service error (${error.response.status}), using fallback`);
    }
    
    // Enhanced fallback response with better pattern matching
    const fallbackResponses = {
      greeting: "👋 Hi there! I'm Ashish's AI assistant. Feel free to ask me about his skills, projects, experience, or anything else related to his portfolio!",
      projects: "🚀 Ashish has worked on exciting AI projects including:\n• VoiceVerse AI Assistant - Voice-powered interactions\n• Weapon Detection System - Computer vision for security\n• ConnectAI Customer Support Platform - AI automation\n\nCheck out the Projects section for more details!",
      skills: "🎯 Ashish's technical expertise includes:\n• AI/ML: Python, TensorFlow, Machine Learning, NLP\n• Web: React.js, Node.js, Express.js\n• Databases: MySQL, MongoDB\n• Computer Vision and Deep Learning\n• Full-stack web development\n\nAsk me about any specific technology!",
      frameworks: "🔧 Frameworks & Technologies Ashish uses:\n• Frontend: React.js, CSS3, Material-UI\n• Backend: Node.js, Express.js\n• AI/ML: TensorFlow, PyTorch, Scikit-learn\n• Databases: MySQL, MongoDB\n• Cloud & DevOps familiarity",
      education: "🎓 Ashish is pursuing B.Tech in Computer Science from Sharda University with a CGPA of 7.32. He's passionate about AI/ML and full-stack development!",
      contact: "📧 You can reach Ashish at:\n• Email: ashishrahin@gmail.com\n• LinkedIn & GitHub: Check the contact form\n• Feel free to use the contact form below to get in touch!",
      experience: "💼 Ashish has hands-on experience with:\n• AI/ML model development and deployment\n• Full-stack web application development\n• Computer vision projects\n• Web scraping and data processing\n• Database design and optimization",
      default: "That's a great question! Feel free to ask me about Ashish's skills, projects, experience, education, or how to contact him. I'm here to help!"
    };
    
    const lowerMessage = message.toLowerCase();
    let response = fallbackResponses.default;
    
    // Smart pattern matching
    if (lowerMessage.match(/^(hi|hello|hey|greetings?|hey there)/)) {
      response = fallbackResponses.greeting;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('built')) {
      response = fallbackResponses.projects;
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('proficient') || lowerMessage.includes('expertise')) {
      response = fallbackResponses.skills;
    } else if (lowerMessage.includes('framework') || lowerMessage.includes('technology') || lowerMessage.includes('tools')) {
      response = fallbackResponses.frameworks;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
      response = fallbackResponses.education;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      response = fallbackResponses.contact;
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('worked')) {
      response = fallbackResponses.experience;
    }
    
    res.json({
      success: true,
      response: response,
      confidence: 0.8
    });
  }
});

module.exports = router;
