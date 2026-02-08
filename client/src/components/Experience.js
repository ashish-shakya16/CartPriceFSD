import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { BsTrophy, BsBook, BsRocket, BsLightbulb } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer & Python Developer',
      org: 'Sharda University',
      type: 'Academic project-led',
      duration: '2024 - Present',
      location: 'Greater Noida, India',
      impact: 'End-to-end builds with AI features for coursework and showcases.',
      bullets: [
        'Shipped multi-tier apps with React frontends, Node APIs, and MySQL/SQLite persistence.',
        'Added AI layers: voice processing, computer vision, and intelligent response systems.',
        'Applied auth, automation, API integrations, and clean repository practices.',
      ],
      tech: ['Python', 'React', 'Node.js', 'MySQL', 'OpenCV', 'Git'],
    },
    {
      title: 'Independent Builder',
      org: 'Self-driven',
      type: 'Hands-on delivery',
      duration: '2024 - Present',
      location: 'Remote',
      impact: '15+ projects spanning AI/ML, SaaS, and automation.',
      bullets: [
        'Planned and executed SaaS-style products, automation tools, and AI assistants.',
        'Translated requirements into scalable architectures with measurable outcomes.',
        'Maintained disciplined Git history, docs, and handoff-ready repos.',
      ],
      tech: ['Python', 'AI/ML', 'React', 'Node.js', 'MongoDB', 'NLP'],
    },
  ];

  const highlights = [
    { icon: <BsTrophy />, title: 'Competitive coding', detail: 'DSA practice on LeetCode, GfG, HackerRank.' },
    { icon: <BsBook />, title: 'Continuous learning', detail: '6+ certifications across Web, AI, React, Java.' },
    { icon: <BsRocket />, title: 'Project portfolio', detail: 'AI assistants, CV systems, SaaS platforms shipped.' },
    { icon: <BsLightbulb />, title: 'Workshops', detail: 'Active in web, AI, and cybersecurity workshops.' },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">AI-first builds across academics and independent delivery</p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.title} className="experience-card">
              <div className="experience-head">
                <div className="experience-title">
                  <FaBriefcase />
                  <div>
                    <h3>{exp.title}</h3>
                    <p>{exp.org}</p>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="badge">{exp.type}</span>
                  <span className="badge subtle">{exp.duration}</span>
                  <span className="badge subtle"><FaMapMarkerAlt /> {exp.location}</span>
                </div>
              </div>

              <p className="experience-impact">{exp.impact}</p>

              <ul className="experience-list">
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-highlights">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <span className="highlight-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
