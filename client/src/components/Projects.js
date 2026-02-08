import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaCamera, FaGlobeAmericas } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);

  const projectsData = [
    {
      id: 1,
      title: 'VoiceVerse AI Assistant',
      description: 'Python-based voice assistant with speech recognition, NLP, and task automation.',
      longDescription: 'Python-based AI voice assistant with speech recognition, text-to-speech, and task automation for hands-free workflows.',
      category: 'AI/ML',
      technologies: ['Python', 'Speech Recognition', 'NLP', 'Text-to-Speech', 'API Integration'],
      imageUrl: '/images/voiceverse.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/Voice_Assistant-Python',
      featured: true,
      metrics: { accuracy: 92 },
      result: 'Handled 1k+ voice commands with ~92% intent accuracy.'
    },
    {
      id: 2,
      title: 'Weapon Detection System',
      description: 'Real-time CV pipeline for weapon detection in video streams.',
      longDescription: 'Computer vision weapon detection using Python, deep learning, and YOLO for real-time alerts on video feeds.',
      category: 'Computer Vision',
      technologies: ['Python', 'OpenCV', 'Deep Learning', 'TensorFlow', 'YOLO'],
      imageUrl: '/images/weapon-detection.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/Weapon-Detection-System',
      featured: true,
      metrics: { accuracy: 89 },
      result: 'Achieved ~89% detection accuracy on test videos.'
    },
    {
      id: 3,
      title: 'Threat Detection Advisor',
      description: 'AI-powered threat detection and advisory system using machine learning.',
      longDescription: 'Machine learning-based threat detection system with real-time analysis and predictive advisories.',
      category: 'AI/ML',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
      imageUrl: '/images/threat-detection.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/Threat_detection-advisor-',
      featured: true,
      metrics: { performance: '94% accuracy' },
      result: 'Detected threats with 94% accuracy on test datasets.'
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'Role-based library system with lending, fines, and DB persistence.',
      longDescription: 'Library management app with lending/returns, fine calculation, and role-based controls on a relational datastore.',
      category: 'Web Development',
      technologies: ['Python', 'MySQL', 'SQLite', 'CRUD', 'Authentication'],
      imageUrl: '/images/library.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/library_management_using_PYTHON',
      featured: false,
      result: 'Processed 5k+ circulation actions with role-based approvals.'
    },
    {
      id: 5,
      title: 'E-Commerce Shop',
      description: 'Full-featured e-commerce platform with cart, checkout, and order management.',
      longDescription: 'Complete e-commerce application with product catalog, shopping cart, and payment integration.',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      imageUrl: '/images/shop.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/my_shop',
      featured: false,
      result: 'Processed 100+ transactions with seamless checkout experience.'
    },
    {
      id: 6,
      title: 'Stream-Based Quiz Platform',
      description: 'Interactive quiz app with real-time scoring and dynamic UI updates.',
      longDescription: 'Quiz platform with subject selection, real-time scoring, and responsive UI backed by Firebase.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
      imageUrl: '/images/quiz.jpg',
      githubUrl: 'https://github.com/ashish-shakya16/stream-based-Quiz-Web',
      featured: false,
      result: 'Served 10k+ quiz attempts with live scoring.'
    }
  ];

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const iconForCategory = (category) => {
    switch (category) {
      case 'AI/ML':
        return <FaBrain />;
      case 'Computer Vision':
        return <FaCamera />;
      case 'Web Development':
      default:
        return <FaGlobeAmericas />;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          AI/ML and full-stack applications I've built
        </p>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-body">
                <div className="project-symbol">{iconForCategory(project.category)}</div>
                <div className="project-copy">
                  <h3>
                    <a
                      className="project-title-link"
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="project-description">{project.longDescription || project.description}</p>
                  {project.result && (
                    <p className="project-metric">{project.result}</p>
                  )}
                  <div className="project-tech">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View Project
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
