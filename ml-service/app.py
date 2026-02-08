from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import random

app = Flask(__name__)
CORS(app)

# Knowledge base about Ashish
KNOWLEDGE_BASE = {
    "name": "Ashish Shakya",
    "location": "Greater Noida, Uttar Pradesh",
    "email": "ashishrahin@gmail.com",
    "phone": "+91 9520191399",
    "github": "github.com/ashish-shakya16",
    "linkedin": "linkedin.com/in/ashish-shakya2023",
    "education": {
        "university": "Sharda University",
        "degree": "Bachelor of Technology in Computer Science Engineering",
        "cgpa": "7.32",
        "status": "2023 - Present"
    },
    "skills": {
        "frontend": ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX"],
        "backend": ["Python", "Node.js", "Express", "REST APIs", "Authentication"],
        "database": ["MySQL", "SQLite", "MongoDB", "Database Design"],
        "ai_ml": ["Machine Learning", "Computer Vision", "Speech Recognition", "NLP", "Deep Learning"],
        "tools": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Android Studio"]
    },
    "projects": [
        {
            "name": "VoiceVerse AI Voice Assistant",
            "description": "AI voice assistant using speech recognition and text-to-speech APIs",
            "tech": ["Python", "Speech Recognition", "AI", "Automation"]
        },
        {
            "name": "Weapon Detection System",
            "description": "Computer vision weapon detection using deep learning",
            "tech": ["Python", "Computer Vision", "Deep Learning", "OpenCV"]
        },
        {
            "name": "ConnectAI Customer Support Platform",
            "description": "SaaS AI-powered customer support with automated responses",
            "tech": ["Python", "AI", "SaaS", "API Integration"]
        },
        {
            "name": "Library Management System",
            "description": "Complete library management with role-based access",
            "tech": ["Python", "SQLite", "MySQL", "CRUD Operations"]
        }
    ],
    "certifications": [
        "Web Development - Data Flair 2024",
        "Java Foundations - Oracle Academy 2024",
        "React Mastery Workshop - Sharda University 2025",
        "Generative AI Landscape - Infosys Springboard 2025",
        "Problem Solving - HackerRank"
    ]
}

def get_response(message):
    """Generate contextual response based on message"""
    message = message.lower()
    
    # Greetings
    if any(word in message for word in ['hi', 'hello', 'hey', 'greetings']):
        return f"Hello! I'm Ashish Shakya's AI assistant. I can tell you about his skills, projects, education, and experience. What would you like to know?", 0.95
    
    # Projects
    if 'project' in message:
        project_list = "\n".join([f"• {p['name']}: {p['description']}" for p in KNOWLEDGE_BASE['projects'][:3]])
        return f"Ashish has worked on several AI/ML projects:\n\n{project_list}\n\nWould you like details about any specific project?", 0.92
    
    # Skills
    if 'skill' in message or 'technology' in message or 'tech stack' in message:
        return f"Ashish's core skills include:\n\n🤖 AI/ML: {', '.join(KNOWLEDGE_BASE['skills']['ai_ml'][:4])}\n💻 Backend: {', '.join(KNOWLEDGE_BASE['skills']['backend'][:4])}\n🎨 Frontend: {', '.join(KNOWLEDGE_BASE['skills']['frontend'][:4])}\n🗄️ Database: {', '.join(KNOWLEDGE_BASE['skills']['database'][:3])}", 0.94
    
    # AI/ML specific
    if 'ai' in message or 'machine learning' in message or 'ml' in message:
        return "Ashish specializes in AI/ML with projects in Computer Vision (Weapon Detection System), Conversational AI (VoiceVerse AI Assistant), and NLP (ConnectAI Platform). He's experienced with Python, TensorFlow, and OpenCV.", 0.93
    
    # Education
    if 'education' in message or 'university' in message or 'college' in message:
        edu = KNOWLEDGE_BASE['education']
        return f"Ashish is pursuing {edu['degree']} from {edu['university']} with a CGPA of {edu['cgpa']}. He's actively learning AI, automation, and full-stack development.", 0.96
    
    # Contact
    if 'contact' in message or 'email' in message or 'reach' in message or 'connect' in message:
        return f"You can reach Ashish at:\n📧 Email: {KNOWLEDGE_BASE['email']}\n📱 Phone: {KNOWLEDGE_BASE['phone']}\n💼 LinkedIn: {KNOWLEDGE_BASE['linkedin']}\n🔗 GitHub: {KNOWLEDGE_BASE['github']}", 0.97
    
    # Experience
    if 'experience' in message or 'work' in message:
        return "Ashish has experience in Full-Stack Development, Python Development, API Integration, Database Engineering, and AI Feature Integration. He's worked on academic projects and independent SaaS platforms with focus on automation and intelligent systems.", 0.91
    
    # Certifications
    if 'certification' in message or 'certificate' in message:
        certs = "\n".join([f"• {cert}" for cert in KNOWLEDGE_BASE['certifications'][:5]])
        return f"Ashish's certifications include:\n\n{certs}", 0.90
    
    # Weapon Detection
    if 'weapon' in message or 'detection' in message or 'computer vision' in message:
        return "The Weapon Detection System uses computer vision and deep learning to identify weapons in images and real-time video streams. Built with Python, OpenCV, and deep learning frameworks.", 0.94
    
    # Voice Assistant
    if 'voice' in message or 'voiceverse' in message or 'assistant' in message:
        return "VoiceVerse is an AI voice assistant using speech recognition and text-to-speech APIs. It enables voice commands, task automation, and intelligent responses through Python-based AI integration.", 0.93
    
    # Default
    responses = [
        "I'd be happy to tell you more about Ashish's projects, skills, or experience. What interests you?",
        "Feel free to ask about Ashish's AI/ML projects, technical skills, or contact information!",
        "You can ask me about Ashish's education, certifications, or any of his development projects!"
    ]
    return random.choice(responses), 0.75

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message', '')
        
        if not message:
            return jsonify({'error': 'No message provided'}), 400
        
        response, confidence = get_response(message)
        
        return jsonify({
            'response': response,
            'confidence': confidence
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'ml-chatbot'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
