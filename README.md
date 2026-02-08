# AI/ML Portfolio - Ashish Shakya

A modern, interactive AI/ML portfolio built with the MERN stack and Python ML service, featuring an intelligent AI chatbot assistant, animated UI, and real-time project showcases.

## 🌟 Unique Features

- **AI Chatbot Assistant**: Powered by Python ML service that knows about skills, projects, and experience
- **Interactive Animations**: Smooth animations using Framer Motion and custom CSS
- **Modern UI/UX**: Gradient themes, glassmorphism effects, and particle backgrounds
- **Live Project Analytics**: View counts, likes, and metrics for each project
- **Visitor Tracking**: MongoDB-based analytics for portfolio engagement
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Integrated email functionality with nodemailer

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion (animations)
- React Icons
- React Toastify
- Particles BG
- Axios

### Backend
- Node.js & Express
- MongoDB & Mongoose
- Nodemailer (email)
- CORS & Rate Limiting

### ML Service
- Python Flask
- Flask-CORS
- Custom AI knowledge base

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- Python 3.8+
- npm or yarn

### Step 1: Clone Repository
```bash
git clone https://github.com/ashish-shakya16/ai-ml-portfolio.git
cd Ashish-Portfolio
```

### Step 2: Install All Dependencies
```bash
npm run install-all
```

Or manually:
```bash
# Root dependencies
npm install

# Client dependencies
cd client
npm install

# ML service dependencies
cd ../ml-service
pip install -r requirements.txt
```

### Step 3: Environment Setup
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ML_SERVICE_URL=http://localhost:8000
```

### Step 4: Start MongoDB
```bash
# Windows
net start MongoDB

# Linux/Mac
sudo systemctl start mongod
```

## 🚀 Running the Application

### Development Mode (All Services)
```bash
npm run dev
```

This starts:
- React frontend: http://localhost:3000
- Node.js backend: http://localhost:5000
- Python ML service: Run separately (see below)

### Start Individual Services

**Backend Server:**
```bash
npm run server
```

**React Client:**
```bash
npm run client
```

**Python ML Service:**
```bash
cd ml-service
python app.py
```

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
Ashish-Portfolio/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # React components
│       ├── App.js
│       ├── App.css
│       └── index.js
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js
├── ml-service/            # Python ML service
│   ├── app.py             # Flask chatbot
│   └── requirements.txt
├── package.json
└── README.md
```

## 🎨 Components

- **Hero**: Animated landing with typed text effect
- **About**: Personal info with animated stats
- **Skills**: Categorized skills with progress bars
- **Projects**: Filterable project gallery
- **Experience**: Timeline of work experience
- **Contact**: Form with email integration
- **ChatBot**: AI assistant with knowledge base
- **Footer**: Links and social media

## 📊 Features Breakdown

### AI Chatbot
- Responds to questions about skills, projects, education
- Context-aware responses with confidence scores
- Fallback mechanism if ML service is down
- Pre-loaded quick questions

### Project Showcase
- Filter by category (AI/ML, Computer Vision, Web Dev)
- Featured projects badge
- GitHub and live demo links
- Metrics display (accuracy, performance)

### Contact System
- Form validation
- Email notifications via Nodemailer
- MongoDB storage for messages
- Toast notifications

### Analytics
- Visitor tracking
- Page view counting
- Project view statistics

## 🔧 Configuration

### Email Setup (Gmail)
1. Enable 2-factor authentication
2. Generate app password
3. Update `.env` with credentials

### MongoDB Setup
- Default: `mongodb://localhost:27017/portfolio`
- Cloud: Replace with MongoDB Atlas URI

### Chatbot Customization
Edit `ml-service/app.py` KNOWLEDGE_BASE to update AI responses with your information.

## 🎯 API Endpoints

### Backend (Port 5000)
- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects/:id/like` - Like a project
- `POST /api/visitors` - Track visitor
- `GET /api/visitors/stats` - Get analytics
- `POST /api/chatbot/chat` - Chat with AI

### ML Service (Port 8000)
- `POST /chat` - Process chatbot message
- `GET /health` - Service health check

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy 'build' folder
```

### Backend (Heroku/Railway)
```bash
# Add Procfile: web: node server/server.js
git push heroku main
```

### ML Service (PythonAnywhere/Railway)
```bash
# Deploy Flask app with requirements.txt
```

## 📱 Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎨 Color Scheme
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Background: `#0a0a0a` (Dark)
- Text: `#e5e7eb` (Light Gray)

## 📄 License
MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

## 📧 Contact
- **Email**: ashishrahin@gmail.com
- **LinkedIn**: [linkedin.com/in/ashish-shakya2023](https://linkedin.com/in/ashish-shakya2023)
- **GitHub**: [github.com/ashish-shakya16](https://github.com/ashish-shakya16)

---

Built with ❤️ by Ashish Shakya
